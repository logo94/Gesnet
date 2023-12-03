<div class="text-center">
    <h1>Content-based addressing</h1>
    <hr>
</div>

IPFS introduce una nuova modalità attraverso cui identificare, cercare e scambiare files, tale modalità prende il nome di content-based addressing

Al momento dell’upload nella rete i file vengono suddivisi in blocchi di dati, a ciascuno dei quali viene attribuito un codice identificativo univoco, desunto direttamente dal proprio contenuto, che prende il nome di Content Identifier (o CID); le risorse invece che essere individuate attraverso il proprio URL (Uniform Resource Locator) e quindi la propria posizione all’interno della rete, vengono identificate attraverso i CIDs relativi ai contenuti desiderati, indipendentemente dalla loro localizzazione. In questo modo i contenuti uguali risponderanno a codici identificativi uguali: se per esempio due nodi saranno in possesso di un’immagine uguale, entrambe le immagini verrebbero identificate, e ricercate, attraverso un medesimo identificativo, evitando duplicati indesiderati o dispersione dei contenuti.

IPFS gestisce i file sotto forma di blocchi di dati, ogni blocco riporta due informazioni: il nome del file (Data) sotto forma di CID ed il suo contenuto; tale file prende il nome di ipfs object. Nel caso in cui un file sia troppo grande per essere contenuto in un solo blocco, automaticamente il sistema crea un IPFS Object vuoto nel contenuto, ma che rimanda ai link di tutti i frammenti di file.
<br>
<div class="text-center">
    <img src="docs/ipfs/img/ipfs-object.png">
</div>
<br>
L’associazione dei blocchi tramite link è utilizzata anche per l’organizzazione dei contenuti costituendo speciali diagrammi ad albero (Merkle DAG) i cui rami sono percorribili in una sola direzione, da nodi radice (root nodes) a nodi foglia (leaf nodes), formando un’unica grande struttura di dati. 
<br>
<div class="text-center">
    <img src="docs/ipfs/img/unix-fs.png">
</div>
<br>
Grazie a questa struttura ad albero, i cui rami sono rappresentati da link, è possibile richiedere e inviare IPFS Objects che rimandano sia ai blocchi di contenuto che ai relativi metadati. Contenuti e metadati possono quindi circolare in modo indipendente l'uno dall'altro pur mantenendo l'associazione tra loro.
<br>
<div class="text-center">
    <img src="docs/ipfs/img/simple-object.png">
</div>
<br>
Per la creazione degli identificativi dei blocchi di dati IPFS si serve di una strategia denominata Multiformat, mentre l'associazione dei dati tramite link, che va a formare un diagramma ad albero (Merkle DAG), viene effettuata per mezzo di [InterPlanetary Linked Data](https://ipld.io/) (IPLD)
