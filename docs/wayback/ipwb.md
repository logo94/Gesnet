<div class="text-center">
    <h1>InterPlanetary Wayback</h1>
    <hr>
</div>
L’archiviazione delle risorse che circolano su internet avviene per mezzo di strumenti specifici denominati web crawlers. 
I web crawlers, o bot, da un dato indirizzo HTTP eseguono delle istantanee dinamiche di ogni link attraverso cui passano, generando dei file WARC (Web ARChive File Format), un formato contenitore appositamente progettato per 
la conservazione a lungo termine di questa tipologia di risorse.

Un file WARC, mediamente della dimensione di 1GB, si presenta come una concatenazione di record WARC: ogni record WARC è composto da tre elementi, ovvero un WARC header, un HTTP header e un HTTP payload.
All’interno del WARC header sono raccolte le informazioni relative al tipo di contenuto, data e motivo di raccolta, indirizzo IP del dispositivo da cui è stato lanciato l’harvesting, codifica del contenuto, codice identificativo della transazione ed eventuali conversioni o modifiche apportate al file. 
I blocco di contenuto è suddiviso in un HTTP header, contenente lo stato della risposta HTTP, e HTTP payload  e all'interno del quale sono riportati i contenuti delle pagine web:
<br>
<div class="text-center">
    <img src="docs/wayback/img/warc.png">
</div>
<br>
Per la conservazione a lungo termine dei file WARC la prassi ne prevede il deposito all’interno di repositories certificati e il replay dei contenuti può avvenire sia per mezzo della Open Wayback Machine di Internet Archive che tramite Wayback Machines installate localmente. 

InterPlanetary Wayback (ipwb) è un software che permette la gestione e la riproduzione dei file WARC all’interno del sistema IPFS: nello specifico ipwb si occupa della divisione, indicizzazione e distribuzione dei payloads dei dati archiviati tra i vari nodi garantendone la conservazione, la ridondanza e l’accesso sul lungo periodo. 

Il processo di indicizzazione e replay è suddiviso in due fasi distinte ed è gestito da due diverse componenti di ipwb:
1. <b>Indicizzazione</b> [indexer]: il software estrae un record WARC alla volta direttamente dal WARC Store (archivio locale di file .warc), lo divide in HTTP header e HTTP payload, attribuisce ad entrambi i valori un'impronta digitale univoca e carica le due parti all’interno della rete. Durante questo processo viene creato un file CDXJ contenente i metadati necessari per riprodurre correttamente il contenuto;
2. <b>Riproduzione</b> [replay] - il software risolve le richieste ricomponendo i HTTP header e HTTP payload dei contenuti disseminati all’interno della rete IPFS in modo tale da permetterne la riproduzione attraverso il browser.

InterPlanetary Wayback sfrutta il software basato su Python pywb (Core Web Archive Toolkit) per supportare le librerie CDXJ e WARC già incluse nel codice del sistema di riproduzione (Wayback Machine). 

<br>
<h4>CDX-JSON</h4>
<hr>   

CDXJ (o CDX-JSON) è un formato che permette l’utilizzo del linguaggio JSON per archiviare i metadati relativi ai record WARC all’interno di IPFS. Ogni riga all’interno di un file CDXJ contiene un indice di registrazione (index record) così composto:
<br>
<div class="text-center">
    <img src="docs/wayback/img/cdx.png">
</div>
<br>
SURT_URI (Sort-friendly URI Reordering Transform) è una trasformazione applicata agli URI che fa in modo che la loro rappresentazione da sinistra a destra corrisponda meglio alla gerarchia naturale dei nomi di dominio:
<div class="text-center">
<code>
URI scheme://domain.tld/path?query

SURT scheme://(tld,domain,)/path?query
</code>
</div>
<br>   
All’interno del blocco JSON vengono invece archiviati i riferimenti al contenuto e altri metadati arbitrari

Le due impronte digitali (digest) che vengono utilizzate dal sistema IPFS per individuare i contenuti  e creare la risposta (header e payload) sono codificati in un unico campo chiamato "locator" composto attraverso uno schema URN.

<br>
<h3>Indicizzazione</h3>
<hr>

Il processo di indicizzazione può essere suddiviso in 4 fasi:

- Creazione di un file warc tramite procedura di harvesting;
- Estrazione di HTTP Header e Payload
<div class="text-center">
    <img src="docs/wayback/img/warc.png">
</div>
- Inserimento di HTTP Header e Payload all’interno della rete IPFS e attribuzione codice identificativo univoco
<div class="text-center">
    <img src="docs/wayback/img/ingest.png">
</div>
- Generazione di  un record CDX in formato JSON, un record CDXJ apparirà quindi come
<div class="text-center">
    <img src="docs/wayback/img/cdxj.png">
</div>
- L’indice CDXJ può a sua volta essere caricato all’interno della rete privata IPFS in modo che i nodi possano avviare un sistema di replay localmente. Va considerato che ad ogni cambiamento dell’indice corrisponderà un cambiamento del suo CID, pertanto ricorrere a IPNS o DNSLink.

<br>
<h3>Replay</h3>
<hr>

Per il replay ipwb interroga il file.cdxj al fine di ottenere header e payload del contenuto desiderato e li riassembla mostrando il contenuto tramite browser.
<br>
<div class="text-center">
    <img src="docs/wayback/img/replay.png">
</div>
<br>
Per garantire ridondanza e quindi resilienza dei dati è possibile integrare IPFS Cluster e IP Wayback in due modalità (da verificare quale sia la più efficiente):
1. i file Warc vengono caricati all’interno della rete privata IPFS e IPFS Cluster gestisce il sistema di pin da remoto in modo che ogni file warc venga replicato n volte in n nodi. L’indice CDXJ viene creato direttamente dai CIDs dei file caricati in IPFS;
2. un nodo crea un indice CDXJ direttamente dai file WARC contenuti in locale, ipwb estrae header e payload  e attribuisce ad ognuno un CID; i CIDs di header e payload vengono replicati e distribuiti tramite IPFS Cluster.

L’intero processo può essere rappresentato attraverso il seguente schema:
<br>
<div class="text-center">
    <img src="docs/wayback/img/ipwb-flow.png">
</div>
<br>
in cui i numeri in rosso rappresentano il processo di inserimento e indicizzazione:

1. Indexer.py estrae HTTP header e payload delle risorse web contenute in un file WARC;
2. [3-4-5] HTTP header e HTTP payload vengono caricati all’interno della rete IPFS, il processo porta alla generazione dei CIDs corrispettivi;
6. Viene generato un indice CDXJ che riporta le coppie di CID relativi a HTTP header e HTTP payload di ogni risorsa insieme ad altre informazioni per il recupero e il replay;

mentre i numeri in blu mostrano il processo di recupero e replay dei contenuti:
1. L’utente richiede un contenuto attraverso il suo URL;
2. Replay.py interroga l’indice CDXJ per sapere quali CID sono necessari per ricomporre il contenuto richiesto;
3. Vengono individuati i CIDs di HTTP header e HTTP payload della risorsa richiesta;
4. [5-6-7] il software inoltra una richiesta alla rete per ottenere i contenuti desiderati; i nodi in possesso di quei contenuti inviano i dati al nodo che ha eseguito la richiesta;
8. HTTP header e HTTP payload vengono riassemblati e riprodotti tramite Wayback Machine.

L’integrazione di ipwb all’interno della rete privata garantisce un’adeguata distribuzione e ridondanza dei file WARC, distribuiti secondo il fattore di replicazione impostato per il Cluster. 
