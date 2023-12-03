<div class="text-center">
  <h1>Private Network</h1>
</div>
Un sistema completamente decentralizzato e accessibile a chiunque (permissionless) se da un lato porta benefici in termini di ridondanza e resilienza dei dati; dall’altro apre le porte ad una serie di minacce:

- non c’è alcuna garanzia che i peer conservino i blocchi di dati all’interno del proprio nodo, sia nel breve che sul lungo periodo; Filecoin introduce l’utilizzo di un collaterale in moneta virtuale come garanzia e, a intervalli di tempo regolari, esegue la verifica  dell’effettivo possesso. Se la verifica sarà positiva il peer verrà ricompensato altrimenti gli verrà sottratta una parte di deposito cauzionale.
- mentre i contenuti sono mantenuti al sicuro tramite crittografia end-to-end, ciò non avviene per i metadati riportati nel DHT, presentando un problema di privacy in quanto tutti i nodi, seguendo la porta del peer, possono controllarne il traffico; 
- non c’è garanzia che al momento dello scambio dei blocchi un peer invii tutti i propri i dati, o addirittura che non ricatti il destinatario per riavere i propri contenuti. 

Per far fronte a queste problematiche sono state ideate diverse soluzioni, di natura prevalentemente tecnologica:
<br>
<h4>Filecoin</h4>
Filecoin è un progetto ideato e promosso dalla Filecoin Foundation che cerca di costituire una mercato alternativo per l'archiviazione dei dati. A differenza del modello di archiviazione in cloud Filecoin propone un'economia basata su una criptovaluta, Filecoin, e sull'utilizzo della blockchain per regolare la condotta dei nodi.
Per poter affittare parte del proprio spazio su disco, un nodo deve versare una cifra in Filecoin che funge da garanzia per la sua buona condatta. Due nodi possono quindi stipulare dei contratti (smart contract) affinchè in cambio di una cifra concordata un nodo si impegna a conservare i dati e mantenerli accessibili in modo continuativo.
In seguito al salvataggio del contratto all'interna della blockchain viene attivato uno smart contract che ad intervalli di tempo regolari verifica l'effettivo possesso dei dati da parte del nodo che li ha presi in custodia: se al momento della verifica il nodo sarà in possesso di quei specifici contenuti, questo riceverà un premio in Filecoin,
al contrario una parte della somma versata inizalmente verrà sottratta. 


In questo modo è possibile garantire la buona condotta dei nodi che saranno quindi incentivati ad adiempere ai propri obblighi, senza la necessità di un'autorità centrale che governi l'ecosistema.

Nonostante Filecoin si stia pian piano conformando come effettiva alternativa ai tradizionali sistemi in cloud, la sua adozione presenta ancora una discreta serie di barriere d'accesso, prime tra tutte la difficoltà d'uso per un utente medio, le avanzate componenti hardware necessarie per poter affittare il proprio spazio di archiviazione e 
la necessità di disporre di un capitale iniziale per poter entrare a far parte dell'ecosistema.

<h4>Servizi commerciali</h4>
In alternativa a Filecoin, negli anni sono sorti molteplici servizi che mettono a disposizione dei propri nodi in giro per il globo tramite i quali disseminare più copie dei propri contenuti. Tra questi si possono menzionare servizi come
[Pinata](https://www.pinata.cloud/) e [Web3 Storage](https://web3.storage/)

<h4>IPFS Private Network</h4>
In alternativa alle soluzioni sopra elencate, Gesnet propone la creazione di una rete privata all'interno della quale solo nodi fidati, le biblioteche, possono partecipare.

La distribuzione di una specifica chiave <i>swarm.key</i> permette a tutti i nodi in possesso della stessa chiave di comunicare tra di loro creando una rete impermeabile rispetto alla rete pubblica IPFS. I nodi esterni alla rete non possono infatti connettersi con i nodi della rete 
privata, quindi non possono ne inviare ne ricevere dati da quest'ultimi. 

La formazione di un'ambiente condiviso tra biblioteche, partecipato da nodi che condividono la stessa appartenenza, in questo caso pubblica, e le stesse visione e missione; permetterebbe la copertura dell'intero territorio nazionale, quindi la distribuzione di più copie delle risorse in luoghi distanti tra loro. 

Il contenuto di un file swarm.key è un'impronta digitale (hash) di una sequenza binaria specifica ed appare come:
<br>
<div class="text-center">
<code>
/key/swarm/psk/1.0.0/
  
/base16/

25f64b1cf31f649819d495e446d4cbcc99000b8cc052a89b681e5f86f995fa28
</code>
</div>
<br>
Per entrare a far parte di una rete privata è sufficiente caricare il file swarm.key all'interno della cartella dove viene eseguito il nodo. 


L'utilizzo di una rete privata in combinazione con IPFS Cluster permette di gestire la ridondanza dei dati tra i nodi della rete e di garantire un ulteriore strato di protezione tramite l'utilizzo di un Clustrer secret. Una strategia analoga al file swarm.key per assicurare che 
i dati vengano ridondati esclusivamente tra i nodi appartenenti allo stesso Cluster.
