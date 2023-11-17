package p2p

type Peer interface {
}

type Transport interface {
	ListenAndAccept() error
}