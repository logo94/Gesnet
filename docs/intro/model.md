<div class="text-center">
    <h1>Il modello</h1>
    <hr>
</div>

Per garantire l'accesso permamente ai contenuti nativi digitali di interesse culturale, Gesnet propone la costituzione di una rete distribuita partecipata esclusivamente da biblioteche e istituti culturali.    
        
Il modello si basa su tre componenti: 
- un sistema di identificazione basato sul contenuto delle risorse
- l'utilizzo di un'architettura peer-to-peer per la comunicazione tra le parti
- distribuire il maggior numero possibile di copie delle risorse in luoghi geografici diversi

L'unione di queste componenti pone le basi per una diversa gestione documentale in cui una risorsa, invece che essere identificata tramite un link che rimanda ad uno specifico webserver, viene indentificata, quindi richiesta, attraverso una stringa univoca ottenuta direttamente dal suo contenuto.
Un client, invece che interrogare un web server, emana una richiesta agli altri nodi della rete peer-to-peer chiedendo uno specifico contenuto; i nodi in possesso di quella risorsa, a prescindere dalla loro posizione all'interno della rete, inviano direttamente, o servendosi di altri nodi come tramite, i contenuti al nodo che ha effettuato la richiesta.
L'impostazione di un fattore di replicazione fisso garantisce la distribuzione di più copie di una stessa risorsa, anche qualora un nodo vada offline, la rete sarà comunque in grado di tornare i contenuti richiesti.
    
L'introduzione di un diverso protocollo di comunicazione oltre che permettere una gestione dei file basata direttamente sul contenuto permette un'ottimizzazione dello spazio di archiviazione dei singoli nodi in quanto risorse uguali sparse tra i vari nodi vengono identificate sotto uno stesso identificativo
<br>
<div class="text-center">
    <img src="docs/intro/img/deduplicazione.png">
</div>
<br>
In questo modo è possibile controllare la deduplicazione e arginare la dispersione dei contenuti

L'utilizzo di un'architettura peer-to-peer, unita ad un fattore di replicazione fisso, permette di estromettere dalla comunicazione server o nameserver di terze parti, costituendo un sistema indipendente rispetto al web pubblico all'interno del quale i nodi sono in grado di indirizzare richieste e contenuti, scoprendo ogni volta nuove vie per instaurare la comunicazione con altri nodi.
Anche qualora il nodo che ha caricato le risorse vada offline, o in caso di eventuali impedimenti lungo il tragitto dei pacchetti, la rete sarà comunque in grado di garantire l'accesso permanente alle risorse
<br>
<div class="text-center">
    <img id="ges-net" src="img/gesnet-example.png">
</div>
<br>
<h3>Realizzazione</h3>
<hr>

Dal punto di vista pratico l'adozione del modello richiede la soddisfazione di due requisiti: disporre di un gran numero di nodi e assicurarsi che la buona condotta dei nodi sia garantita

Per soddisfare questi requisiti in un contesto completamente decentralizzato sono state individuate diverse soluzioni tecnologiche, dall'utilizzo della blockchain per la continua verifica dell'effettivo possesso dei dati da parte dei nodi a servizi per l'affitto di nodi appartenenti ad un unico fornitore, distribuiti in diversi luoghi geografici

La soluzione proposta da Gesnet è invece di natura analogica: per adattarsi al nuovo contesto informativo e in continuità con quanto fatto fino ad oggi per le risorse analogiche, le biblioteche possono offrirsi come base stabile per i contenuti nativi digitali. Questo formando una rete distribuita privata, partecipata esclusivamente da altre biblioteche. 

Installando un'applicazione sul proprio PC o distribuendo hardware preconfigurati, solo da collegare alla corrente e alla rete, è possibile condividere parte dello spazio di archiviazione di ogni computer di ogni biblioteca in modo da formare un unico file system distribuito.
<br>
<div class="text-center">
    <img id="gesnet-single" src="img/Gesnet-single.png">
</div>
<br>
Mentre un opzione dall'alto permetterebbe la costituzione di una rete privata tramite un movimento coordinato di ingresso, è anche possibile una realizzazione dal basso in cui ogni biblioteca si crea un sistema di backup locale per i dati affidati all'esterno, predisponendosi allo stesso tempo all'ingresso in un rete privata su scala nazionale.
<br>
<div class="text-center">
    <img id="gesnet-multi" src="img/Gesnet-multi.png">
</div>
<br>
Tutti gli strumenti utilizzati, messi a disposizione da IPFS, sono rilasciati tramite licenza aperta, è quindi possibile accedere direttamente al codice sorgente ed eventualmente adattarlo in base alle proprie esigenze.

La creazione dell'applicazione, quindi la traduzione del modello in codice, si configura tuttavia come l'ultima tappa di una riflessione che coinvolga non solo gli aspetti tecnologici ma anche organizzativi, amministrativi, legali e professionali. 
Modelli di espansione scalabili, stabilità della rete, principi di ridondanza, vincoli burocratici: un progetto di questa portata sin dalla fase progettuale necessita di un’attenta pianificazione a cui tutti, bibliotecari e civili, hanno il diritto di contribuire.

La documentazione originale di IPFS, in lingua inglese, non è di semplice comprensione per personale non specializzato, necessita infatti della conoscenza approfondita di diversi rami dell'informatica, dalla sistemistica allo sviluppo applicazione. 

Per ridurre il più possibile le barriere d'accesso all'argomento se ne offre una versione semplificata in lingua italiana
