<div class="text-center">
    <h1>Multiaddress</h1>
    <hr>
</div>

Il protocollo di rete libp2p si occupa di instaurare un dialogo tra i peers in ascolto stabilendo una comunicazione sicura. Per far ciò si serve di tre strategie, ovvero negoziazione del protocollo (protocol negotiation), 
identificazione univoca dei peer (peer identity o PeerID) e utilizzo di prefissi multiaddress.

Ogni protocollo è identificato attraverso un protocol id:
<br>
<div class="text-center">
    <code>/my-app/amazing-protocol/1.0.1</code>
</div>
<br>    
in cui viene riportata anche la versione, ogni aggiornamento al protocollo porterà ad una versione successiva dl protocol id.

Quando inizia il dialogo tra due peer, libp2p invia in rete il protocol id del protocollo che si vuole utilizzare; se i peer in ascolto non supportano il protocollo allora il dialogo viene chiuso e viene riprovato in seguito. 
Se invece il protocollo è supportato, il peer in ascolto risponderà inviando lo stesso protocol id in modo da impostare i parametri per le connessioni future.

Durante il dialogo si può offrire una lista di protocolli invece che uno solo, quando si offre una lista di protocol ids saranno provati tutti in successione e il primo protocollo supportato verrà utilizzato per la comunicazione. 
<br>
<div class="text-center">
    <code>/ip4/1.2.3.4/tcp/6543</code>
</div>
<br>
Per stabilire come raggiungere gli altri peers libp2p usa una convenzione denominata ‘multiaddress’ o multiaddr: una stringa autodescrittiva che contiene al proprio interno sia l’indirizzo IP che la porta TCP del peer
<br>

<h3>PeerID</h3>
 
Un PeerID è un codice che permette di identificare univocamente un peer all’interno della rete IPFS. All’inizializzazione di un nodo ad un peer viene assegnata una coppia di chiavi: 
- Chiave Pubblica: l’impronta digitale (multihash) della chiave pubblica di un peer viene utilizzata per identificare univocamente il nodo
- Chiave Privata: viene utilizzata dal peer per convertire in modo corretto i contenuti codificati dal mittente con la sua chiave pubblica

L’impronta digitale della chiave pubblica viene infine convertita in stringa attraverso l’applicazione della funzione base58, un PeerID apparirà quindi come:
<br>
<div class="text-center">
    <code>p2p/Qmfybd34g8gYGYgr84ytjahsyvkf...</code>
</div>
<br>
Un indirizzo multiaddress è rappresentabile come:
<br>
<div class="text-center">
    <code>/ip4/1.2.3.4/tcp/6543/p2p/Qmfybd34g8gYGYgr84ytjahsyvkf...</code>
</div>
<br>
L’identificazione dei peers attraverso il proprio indirizzo TCP/IP e la loro impronta digitale criptata rende impossibile l’impersonificazione in quanto anche disponendo di IP e porta il PeerID non coinciderebbe.
