# Vaultify



- ### p2p Folder documentation

> transport.go

Topics in this Files are documentated here. 

- Peer is and interface that represents the remote node
- Transport is anything that handles the communication btw the nodes in the network . This can be of form (TCP, UDP or websockets ... )

>tcp_tansport.go

- TCPPeer represents the remote node over a TCP established connection

*TCPPeer struct*
- conn is the underlying connection of the peer

- If we dial and retrive a conn => outbound == true

- Close Implements the Peer interface

- Consume func implements the Transport interface which will return readonly channel for reading the  incoming messages received from the another peer in the network

> handshake.go

HandshakeFunc is ...

Basically what handshake func is doing . Before establishing a connection there will be a handshake btw the peers . If the handshake is good then they will establish the connection. 

> message.go 

Message represents any arbitary data that is being sent over the each transport btw two nodes in the network


> store.go 

Content Addressable storage which can save anything in deep nested folder based on the transformation of the key . 