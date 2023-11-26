package p2p

import (
	"fmt"
	"net"
	"sync"
)
type TCPTransportOps struct {
	ListenAddr 		string
	HandshakeFunc 	HandshakeFunc
	Decoder 		Decoder
}
type TCPTransport struct {
	TCPTransportOps 
	listener      net.Listener
	
	mu 		 sync.RWMutex
	peers	 map[net.Addr] Peer
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

func NewTCPTransport (opts TCPTransportOps) *TCPTransport{
	return	&TCPTransport{
		TCPTransportOps: opts,
	}
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

type Temp struct {}

func (t *TCPTransport) handleConn(conn net.Conn) {
	peer := NewTCPPeer(conn, true)

	if err := t.HandshakeFunc(peer); err != nil {
		conn.Close()
		fmt.Printf("TCP handshake error: %s\n", err)
		return 
	}
	
	msg := &Message{}
	for {
		if err := t.Decoder.Decode(conn, msg); err != nil {
			fmt.Printf("tcp error : %s\n", err)
			continue
		}

		msg.From = conn.RemoteAddr()

		fmt.Printf("message: %+v\n", msg)
	}
}



