<div class="text-center">
    <h1>Merkle DAG</h1>
    <hr>
</div>

I CID non sono utili solo all’identificazione di un contenuto specifico ma sono indispensabili per la rappresentazione, organizzazione e funzionamento della struttura informativa. Dal momento che un CID può identificare univocamente un blocco, è possibile utilizzarlo per descrivere l’associazione tra più blocchi, per far questo ci si serve di blocchi che fungono da directory, contenenti al proprio interno liste di altri CID: andando così’ a formare un diagramma ad albero denominati Merkle DAG (dal nome del ricercatore che per primo ha descritto questa tipologia di struttura).

Merkle DAG (Directed Acyclic Graph) è una struttura gerarchica di dati che garantisce affidabilità e adeguata distribuzione dei dati interconnessi. 
Il diagramma ad albero funge da indice per i dati, velocizzandone il recupero e lo scambio. I nodi che non hanno genitori ‘parents’ sono detti root nodes, mentre quelli senza figli (children) 
sono detti leaf nodes, i nodi che hanno sia genitori che figli sono chiamati intermediate nodes. Un grafo si definisce aciclico se non ci sono loop nel grafo, quindi ci si può muovere soltanto da parent nodes a child nodes e non viceversa.

Alcuni file potrebbero essere troppo grandi per essere contenuti in un singolo blocco, per questo IPFS divide i dati in blocchi di dimensione inferiore utilizzando metadati per collegarli insieme; 
Mutable File System (MFS) e Unix File System (UnixFS) offrono supporto nella gestione di queste procedure.

Per la creazione di un Merkle DAG si procede:

1. codifica dei leaf nodes (file come per esempio immagini), identificati ognuno attraverso un CID; i nodi sono costituiti principalmente da due attributi: il nome del file (filename) e i dati corrispondenti al contenuto (content). Insieme questi attributi formano, come detto, un blocco di dati (bafyfg47idf….).

<div class="text-center">
    <img src="docs/ipfs/img/merkle-1.png">
</div>

2. si comincia a costruire il DAG costituendo per primi i CID di tutti i leaf nodes (file)

<div class="text-center">
    <img src="docs/ipfs/img/merkle-2.png">
</div>

3. partendo dai leaf node si può quindi procedere alla creazione della struttura dal basso verso l’alto:

<div class="text-center">
    <img src="docs/ipfs/img/merkle-3.png">
</div>
<br>
Il CID di ogni blocco dipende quindi dal nodo sovrastante, se un CID cambia, cambia anche l’intera struttura sottostante. Se per esempio un‘immagine venisse modificata verrebbe creato un altro CID e quindi l’immagine iniziale non sarebbe compromessa. Dal momento che il CID di un child node è contenuto all’interno di un parent node, se il secondo cambiasse anche il primo cambierebbe.

Per lo scambio di contenuti si utilizzano esclusivamente i root CIDs in modo da comprendere automaticamente tutta la struttura di dati e metadati sottostante (codificata in UnixFS).
<br>
<div class="text-center">
    <img src="docs/ipfs/img/merkle-4.png">
</div>
<br>
La creazione della struttura ad albero, quindi l'associazione dei blocchi di contenuto, avviene per mezzo di InterPlanetary Linked Data (IPLD) di cui si offre una panoramica nella prossima sezione
