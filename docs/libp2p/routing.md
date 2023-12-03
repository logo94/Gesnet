<div class="text-center">
    <h1>Routing</h1>
    <hr>
</div>

Per la ricerca e lo scambio di dati all’interno della rete peer-to-peer è necessario stabilire il sistema attraverso cui individuare risorse e nodi all’interno della rete. Per ottenere dalla rete la risorsa richiesta è necessario capire quali nodi sono in possesso di quella risorsa; un peer può comunicare con un peer remoto servendosi di peers di terzi che fungono da trasmettitori (routers). La crittografia end-to-end impedisce ai trasmettitori di comprendere il messaggio trasmesso.

Può essere inteso come router qualsiasi nodo collegato alla rete: alcuni router supportano protocolli di configurazione automatici (Upnp, nat-pmp), questi router permettono a libp2p di configurarsi automaticamente per ascoltare il traffico in arrivo.

I peers sono in grado di indirizzare le richieste direttamente ai nodi in possesso di quelle risorse attraverso l’utilizzo di un Distributed Hash Table (DHT). Una DHT utilizza il CID di un file per cercare una risorsa all’interno della rete; 

Attraverso l’applicazione dell’algoritmo Kademlia è possibile definire a chi chiedere e a chi riferire la posizione dei contenuti all’interno della rete di peers; tale algoritmo permette infatti di costituire delle tabelle di hash distribuite attraverso cui è possibile archiviare e ricercare coppie di key/value, ovvero coppie di funzioni crittografiche relative ai contenuti e ai peer che li posseggono: 
<br>
<div class="text-center">
    <img src="docs/libp2p/img/DHT.png">
</div>
<br>
Alla richiesta di un file un nodo interroga quindi la DHT per trovare i nodi in possesso di quelle risorse. 
