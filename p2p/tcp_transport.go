package p2p

import (
	"fmt"
	"net"
)
type TCPTransportOps struct {
	ListenAddr 		string
	HandshakeFunc 	HandshakeFunc
	Decoder 		Decoder

	OnPeer 			func(Peer) error
}
type TCPTransport struct {
	TCPTransportOps 
	listener      net.Listener
	rpcch chan RPC
}


type TCPPeer struct {
	conn net.Conn
	outbound bool
}

func NewTCPPeer (conn net.Conn, outbound bool) *TCPPeer {
	return &TCPPeer {
		conn: conn, 
		outbound: outbound,
	}
}

func (p *TCPPeer) Close() error {
	return p.conn.Close()
}

func NewTCPTransport (opts TCPTransportOps) *TCPTransport{
	return	&TCPTransport{
		TCPTransportOps: opts,
		rpcch: make(chan RPC),
	}
}

func (t *TCPTransport) Consume() <-chan RPC {
	return t.rpcch
}

func (t *TCPTransport) ListenAndAccept() error {
	var err error
	t.listener, err = net.Listen("tcp", t.ListenAddr)
	if err != nil {
		return err
	}
	go t.startAcceptLoop()
	return nil
}

func (t *TCPTransport) startAcceptLoop() {
	for {
		conn, err := t.listener.Accept()
		if err != nil {
			fmt.Printf("TCP accept error : %s\n", err)
		}
		go t.handleConn(conn)
	} 
}


func (t *TCPTransport) handleConn(conn net.Conn) {

	var err error

	defer func() {
		fmt.Printf("dropping peer connecting: %s", err)
		conn.Close()
	}()

	peer := NewTCPPeer(conn, true)

	if err = t.HandshakeFunc(peer); err != nil {
		return 
	}

	if t.OnPeer != nil {
		if err = t.OnPeer(peer); err != nil {
			return
		}
	}
	
	//Read Loop
	rpc := RPC{}
	for {
		 err := t.Decoder.Decode(conn, &rpc) 
		 if err != nil {
			return 
		}

		rpc.From = conn.RemoteAddr()
		t.rpcch <- rpc
	}
}



