<div class="text-center">
    <h1>Multiformat</h1>
    <hr>
</div>

Per l’identificazione univoca di ogni blocco di dati IPFS si serve di una strategia denominata Multiformat ovvero l’impiego di prefissi in grado di auto-descrivere i valori che rappresentano. Attraverso questa soluzione il sistema IPFS è in grado di risalire al contenuto di un blocco direttamente dal proprio CID, mantenendo l’interoperabilità e l’identità dei blocchi nel tempo indipendentemente dall’introduzione di nuovi formati, linguaggi di programmazione e funzioni crittografiche. 

Un CID è quindi composto da una serie di prefissi, ognuno dei quali svolge una diversa funzione: multihash, multicodec, multibase.

<h3>Multihash</h3>

prefisso che indica la funzione crittografica utilizzata per ottenere l’impronta digitale (hash) della sequenza di bits che formano un blocco; il formato multihash è auto-descrittivo in quanto contiene al proprio interno metadati che descrivono la funzione crittografica utilizzata per codificare la sequenza binaria e la sua lunghezza. 
    
Multihash segue il pattern TLV (type-length-value) dove:

- type (algo): identificatore della funzione crittografica utilizzata per generare l’hash
- length: lunghezza dell’hash (sha2-256 = 256 bits)
- value: effettivo valore del codice binario

<div class="text-center">
    <img src="docs/ipfs/img/cid-anatomy-1.png">
</div>
<br>
La funzione crittografica che genera un hash deve seguire le seguenti caratteristiche:

- Deterministica: allo stesso input corrisponde sempre lo stesso hash;
- Non-correlato: un minimo cambiamento nell’input genera hashes differenti;
- Unidirezionale: è impossibile ricostruire i dati dall’hash;
- Unico: solo un file può produrre uno specifico hash.

IPFS utilizza di default la funzione crittografica sha2-256 ma possono essere utilizzate altre funzioni come blake2b, sha3-256, sha3-512. Con il tempo e con il progredire della potenza di calcolo dei computer alcune funzioni crittografiche potrebbero non risultare più sufficientemente sicure; è quindi indispensabile il CID riporti la funzione utilizzata per la creazione di un determinato hash.

<br>
<h3>Multicodec</h3>

Il prefisso multicodec viene utilizzato per rendere espliciti formati o linguaggi di programmazione utilizzati per codificare il blocco; 

La versione corrente, versione 1 o CIDv1, prevede l’utilizzo di un codec IPLD (vedi InterPlanetary Linked Data) in modo da esplicitare la tipologia di contenuto, e quindi il formato, dei blocchi.

La Versione 1 di un CID può quindi essere rappresentata come: 
<br>
<div class="text-center">
    <img src="docs/ipfs/img/cid-anatomy-2.png">
</div>
<br>
Nell’esempio riportato dag-pb corrisponde a un IPLD codec corrispondente al linguaggio neutrale di Google Protocol-Buffer utilizzato per codificare la struttura di blocchi di dati e metadati rappresentati tramite un diagramma ad albero (Merkle DAG) per ogni contenuto.

Più semplicemente il CIDv1 può quindi essere rappresentato come:
<br>
<div class="text-center">
    <img src="docs/ipfs/img/cid.png" style="width: 25em;">
</div>
<br>
Una lista dei codecs è disponibile al seguente [link](https://github.com/multiformats/multicodec/blob/master/table.csv)

<br>
<h3>Multibase</h3>

per rendere la sequenza binaria sopra riportata human-friendly tale sequenza può essere codificata con una ulteriore funzione. Un ulteriore prefisso denominato multibase indicherà quale funzione è stata usata per la codifica

La versione 0 (CIDv0) per la conversione della sequenza binaria in stringa utilizza di default la funzione base58btc che, in quanto fissa, rimane implicita. Un esempio di CIDv0 può essere:

<div class="text-center">
    <code>QmvjhV65fuvUvf75FUjUhf56GYTF67fvJFUTUHVa</code>
</div>
    
La versione 1 supporta ulteriori funzioni, un esempio di CIDv1 può infatti essere:

<div class="text-center">
    <code>bafybeigdyrzt5sfp7udm7hu76uh7y26nf3efuylqabf3</code>
</div>

in cui la b iniziale corrisponde all'identificativo multibase della base di codifica base32, utilizzato per molte implementazioni su IPFS. Gli identificatori multibase sono elencati al seguente [link](https://github.com/multiformats/multibase/blob/master/multibase.csv)

Il CIDv1 di un blocco può quindi essere rappresentato sotto forma di stringa come:

<div class="text-center">
    <code>[multibase-prefix][multicodec-cidv1][multicodec-content-type][multihash-content-address]</code>
</div>

Un blocco è quindi identificabile attraverso due versioni:

1. una sequenza binaria che rappresenta i dati e la loro codifica
2. un identificativo desunto dalla stessa sequenza binaria ma espresso tramite stringa alfanumerica comprensibile da agente umano (i CIDs non sono contenuti all’interno dei blocchi in quanto siano semplicemente una codifica in base del proprio contenuto).

Attraverso il tool IPFS [CID Inspector](https://cid.ipfs.tech/) è possibile interrogare i CIDs in modo da verificare i singoli prefissi e le altre versioni disponibili.
<br>
<div class="text-center">
    <img src="docs/ipfs/img/cid-inspector.png">
</div>
