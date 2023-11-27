package main

import (
	"fmt"
	"log"

	"github.com/mrinalxdev/vualtify/p2p"
)

func OnPeer(p2p.Peer) error {
	fmt.Printf("doing some logic with the peer connectiong")
	return nil
}

func main() {
	tcpOpts := p2p.TCPTransportOps{
		ListenAddr: ":3000",
		HandshakeFunc: p2p.NOPHandshakeFunc,
		Decoder: p2p.DefaultDecoder{},
		OnPeer: OnPeer,
	}
	tr := p2p.NewTCPTransport(tcpOpts)

	go func (){
		for {
			msg := <-tr.Consume()
			fmt.Printf("%+v\n", msg)
		}
	}()

	if err := tr.ListenAndAccept(); err != nil {
		log.Fatal(err)
	}

	
	select{

	}
}