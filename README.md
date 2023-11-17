# Vaultify

p2p Folder documentation

> transport.go

Topics in this Files are documentated here. 

- Peer is and interface that represents the remote node
- Transport is anything that handles the communication btw the nodes in the network . This can be of form (TCP, UDP or websockets ... )

>tcp_tansport.go

- TCPPeer represents the remote node over a TCP established connection

*TCPPeer struct*
- conn is the underlying connection of the peer

- If we dial and retrive a conn => outbound == true
- if 

> handshake.go
HandshakeFunc is ...

Basically what handshake func is doing . Before establishing a connection there will be a handshake btw the peers . If the handshake is good then they will establish the connection. 