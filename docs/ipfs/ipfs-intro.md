<div class="text-center">
    <h1>InterPlanetary File System</h1>
    <hr>
</div>
<div class="text-center">
    <img src="docs/ipfs/img/ipfs-logo.png">
</div>
<br>
[InterPlanetary File System](https://ipfs.tech/), in breve IPFS, è un sistema dati distribuito basato su architettura peer-to-peer che, proponendosi come evoluzione del web tradizionale, mira a connettere tutti i dispositivi computazionali tramite un unico sistema di file (system of files)

IPFS introduce due componenti fondamentali:
    
<div class="container py-1">
    <div class="row row-cols-1 row-cols-md-2 g-4 mt-5">
      <div class="col text-center">
        <div class="card border-0 justify-content-center" style="background-color: transparent;">
          <img src="./img/p2p.png" class="card-img-top mx-auto rounded" alt="..." style="width: 20em;">
          <div class="card-body mt-3">
            <h5 class="card-title">Architettura peer-to-peer</h5>
            <p class="card-text">L'utilizzo di un sistema peer-to-peer permette di creare una rete privata, inaccessibile dall'esterno e all'interno della quale la comunicazione avviene direttamente tramite i nodi, senza passare per server o nameserver di terze parti</p>
            <p class="card-text">Anche qualora un nodo vada offline, altri nodi potranno fornire i documenti richiesti o agire da tramite tra altri nodi.</p>
          </div>
        </div>
      </div>
      <div class="col text-center">
        <div class="card border-0 justify-content-center" style="background-color: transparent;">
          <img id="content-based" src="./img/content-based.png" class="card-img-top mx-auto rounded" alt="...">
          <div class="card-body mt-3">
            <h5 class="card-title">Content-based addressing</h5>
            <p class="card-text">Le risorse invece che essere individuate attraverso il proprio URL, e quindi la propria posizione all’interno della rete, vengono identificate attraverso codici identificativi univoci desunti direttamente dal loro contenuto</p>
            <p class="card-text">L'identificazione per mezzo del contenuto di una risorsa pone le basi per un ambiente interoperabile senza bisogno di precoordinazione, permettendo una deduplicazione controllata e garantendo l'integrità e autenticità dei dati</p>  
          </div>
        </div>
      </div>
    </div>

Più che un semplice protocollo, IPFS può essere definito come un movimento coordinato da <a class="text-decoration-none" href="https://protocol.ai/">Protocol Lab</a>, laboratorio di ricerca, sviluppo e implementazione open-source. L'ecosistema di IPFS si pone l'obbiettivo di creare un web permanente, più trasparente e libero. 
Questo mettendo a disposizione una serie di strumenti software:
- [IPFS Node](https://docs.ipfs.tech/install/ipfs-desktop/) per la gestione dei nodi lato applicazione
- [Libp2p](https://libp2p.io/) per la comunicazione tra i nodi nell'ambinete peer-to-peer
- [Filecoin](https://filecoin.io/) per lo storage decentralizzato dei contenuti

Una panoramica dell'universo IPFS è disponibile al seguente [link](https://awesome.ipfs.io/)

Nel 2021, in seguito ad una [donazione](https://blog.archive.org/2021/04/01/filecoin-foundation-grants-50000-fil-to-the-internet-archive/) da parte della Filecoin Foundation, [Internet Archive](https://archive.org/) ha cominciato a conservare parte dei suoi archivi digitali tramite [Filecoin](https://filecoin-io.ipns.dweb.link/), servizio di storage decentralizzato basato su IPFS e sull'utilizzo della blockchain

Il principio di funzionamento di IPFS può essere descritto tramite i seguenti passaggi: 

Quando un nodo ha bisogno di una risorsa, interroga una tabella distribuita tra i nodi per sapere quai nodi siano in possesso di quello specifico contenuto, i nodi in possesso di una copia ricevono la richiesta e inviano una risposta al nodo che ha eseguito la richiesta

La comunicazione tra i nodi a livello di rete è gestita da Libp2p che a sua volta sfrutta la rete BitTorrent: mentre BitTorrent tiene separati i gruppi di peers in base ai file posseduti, IPFS utilizza un unico gruppo (swarm) di peer per tutti i dati condivisi dagli utenti, per questo la rete ipfs può essere vista come una sottorete di BitTorrent;

Ogni volta che un nodo accede ad una risorsa, una copia della stessa viene salvata sotto forma di file cache a livello locale; i nodi possono gestire manualmente il mantenimento o la cancellazione dei file da loro posseduti, ottimizzando il loro spazio di archiviazione e garantendo l’accesso a lungo termine a specifici contenuti.

Anche qualora un nodo si disconnettesse, fintanto che i nodi della rete saranno in possesso del numero sufficiente di dati necessari a ricomporre integralmente un file, l’accesso ai contenuti non verrà compromesso.

L'ecosistema IPFS si pone alla base della realizzazione del [Web3.0](https://en.wikipedia.org/wiki/Web3)
