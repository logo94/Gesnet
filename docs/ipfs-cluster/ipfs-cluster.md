<div class="text-center">
    <h1>IPFS Cluster</h1>
    <hr>
</div>

Per la gestione della ridondanza ci si serve di [IPFS Cluster](https://ipfscluster.io/), un software che lavora in parallelo al nodo IPFS e permette di replicare automaticamente i contenuti all’interno di altri nodi che fanno parte del cluster. 
<br>
<div class="text-center">
    <img src="https://ipfscluster.io/cluster/diagrams/png/cluster.png">
</div>
<br>
Le due entità IPFS-Cluster daemon e IPFS cluster hanno PeerIDs diversi nonostante corrano all’interno dello stesso nodo e comunicano tra loro. I due demoni utilizzano porte e API endpoints differenti.

Il software IPFS Cluster viene eseguito per mezzo di 3 applicazioni:
- <b>ipfs-cluster-service</b> esegue un Cluster peer (simile a IPFS deamon) usando una preconfigurazione dati e salvando alcune informazioni all’interno del disco locale; all’interno della preconfigurazione è presente una voce “secret”: per tutti i nodi appartenenti al cluster questo valore deve essere lo stesso.
- <b>ipfs-cluster-ctl</b> è utilizzato per interagire con il cluster quindi comunicare con gli altri nodi compiendo azioni come aggiungere ‘pin’ ai CIDs condivisi nel Cluster;
- <b>ipfs-cluster-follow</b> permette di seguire un altro Cluster peer, i nodi connessi tramite ipfs-cluter-follow possono accedere al cluster solo in lettura. Integra alcune funzioni sia di ipfs-cluster-service sia che di ipfs-cluster-ctl.

<h4>Pinset</h4>

Quando un nodo avrà terminato lo spazio di archiviazione a disposizione, potrà trasferire i blocchi inutilizzati in una garbage-collection che a intervalli di tempo prestabiliti cancellerà i contenuti non spuntati (unpinned). I PIN sono quindi metadati che contengono la lista di CID univoci spuntati all’interno del proprio nodo; quando un peer richiede un file, viene eseguita una copia in cache al proprio nodo, in questo modo più copie dei blocchi vengono distribuite tra più peer. 

Alcuni blocchi possono quindi essere ‘spuntati’ (pin) affinchè non finiscano nella garbage collection e quindi vengano archiviati all’interno dell’IPFS store (cartella locale) in modo da garantire l’accessibilità ai contenuti anche offline.
