package p2p

import (
	"fmt"
	"net"
	"sync"
)

type TCPTransport struct {
	listenAddress string
	listener      net.Listener
	shakeHands 	HandshakeFunc
	decoder Decoder

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

func NewTCPTransport (listenerAddr string) *TCPTransport{
	return	&TCPTransport{
		shakeHands: NOPHandshakeFunc,
		listenAddress: listenerAddr,
	}
}

func (t *TCPTransport) ListenAndAccept() error {
	var err error
	t.listener, err = net.Listen("tcp", t.listenAddress)
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

type Temp struct {

}

func (t *TCPTransport) handleConn(conn net.Conn) {
	peer := NewTCPPeer(conn, true)

	if err := t.shakeHands(peer); err != nil {
		 
	}
	
	msg := &Temp{}
	for {
		if err := t.decoder.Decode(conn, msg); err != nil {
			fmt.Printf("tcp error : %s\n", err)
			continue
		}
	}

	fmt.Printf("new incoming connection %+v\n", peer)
}



