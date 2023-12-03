<div class="text-center">
    <h1>Architettura peer-to-peer</h1>
    <hr>
</div>

Esistono principalmente tre tipologie di architettura per la comunicazione tra computer: centralizzata, decentralizzata e distribuita.
<br>
<div class="text-center">
    <img src="docs/libp2p/img/type-net.png">
</div>
<br>
Mentre il modello client-server si può definire centralizzato, un'architettura peer-to-peer solitamente si serve di una struttura decentralizzata o distribuita.

La comunicazione tra i nodi viene gestita automaticamente per mezzo di Libp2p, uno stack di rete modulabile che supporta la gestione dei protocolli di rete che regolano il funzionamento del sistema peer-to-peer: 
attraverso lo stack libp2p i peers possono ‘ascoltare’ il flusso di pacchetti che circolano a livello TCP/IP instaurando un ‘dialogo’ sicuro con gli altri nodi IPFS.

Lo stack libp2p può essere rappresentato, in rapporto allo standard OSI-ISO RM, come:
<br>
<div class="text-center">
    <img src="docs/libp2p/img/ipfs-osi.png">
</div>
<br>
Libp2p viene definito modulabile in quanto supporti molteplici moduli e protocolli per il funzionamento della rete peer-to-peer (Peer Discovery, Peer Routing, Content Routing, Transports, Stream and Protocol Multiplexers, Encryption, 
Authentication, PubSub, ecc.) e permetta agli sviluppatori di scegliere quale protocollo di trasporto utilizzare (TCP-UDP/IP, QUIC, Ethernet) ed eventualmente supportare più trasporti contemporaneamente.

La comunicazione all'interno della rete peer-to-peer viene gestita da parte di Libp2p per mezzo di una serie di strategie:

- <b>Negoziazione del protocollo</b>: per stabilire la connesione tra i nodi viene prima stabilito il protocollo di comunicazione da utilizzare per lo scambio
- <b>PeerID</b>: ogni nodo della rete viene identificato attraverso l'impronta digitale della propria chiave pubblica
- <b>Multiaddress</b>: stringa autodescrittiva che riporta l'IP, il protocollo e il PeerID di un nodo
- <b>Routing</b>: le richieste vengono indirizzate per mezzo di tabelle distribuite tra i nodi (Distributed Hash Table)
- <b>Exchange</b>: lo scambio dei blocchi di dati avviene per mezzo del protocollo BitSwap

La comunicazione all’interno della rete IPFS avviene nel seguente modo:
1. Un nodo, identificato attraverso un codice univoco noto come PeerID (hash della sua chiave pubblica), inoltra la richiesta per la ricerca del contenuto all'interno della rete.
2. L’instradamento delle richieste avviene per mezzo di tabelle distribuite (Distributed Hash Table) contenenti coppie di PeerID e dei CIDs da loro posseduti; 
tramite l’interrogazione di queste tabelle è quindi possibile risalire ai nodi in possesso dei contenuti richiesti.
3. Prima dell’invio i peers in possesso dei blocchi richiesti codificano il contenuto con la chiave pubblica del peer che ha eseguito la richiesta, in questo modo solo con la chiave privata corretta sarà possibile decodificare correttamente
il contenuto dei blocchi ricevuti.

La componente libp2p responsabile della gestione del trasporto è chiamata ‘switch’ e fornisce un unico "punto di ingresso" per l’ascolto e il dialogo liberando il codice dell'applicazione dalla gestione 
di trasporti specifici e di altri pezzi dello "stack di connessione" utilizzati in background.
Lo switch coordina principalmente tre servizi distinti: Network (instaurazione di una comunicazione sicura), Routing (instradamento delle richieste) ed Exchange (scambio di blocchi). 

<br><hr><br>

Libp2p supporta una moltitudine di protocolli:
       
- <b>Exchange</b>: BitTorrent, BitSwap, FTP, HTTP
- <b>Routing</b>: Gossip, Chord, Kad DHT, mDNS, Delegato, [I2P, TOR]
- <b>Network</b>: CJDNS, UDT, uTP, WebRTC, QUIC, TCP, WebSockets, [I2P, TOR]

<br><hr><br>
