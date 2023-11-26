package p2p

import "net"

type Message struct {
	From    net.Addr
	Payload []byte
}
