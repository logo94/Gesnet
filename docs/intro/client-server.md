<div class="text-center">
    <h1>Architettura client-server</h1>
    <hr>
</div>
<br>

Per comprendere le cause della scomparsa delle risorse web bisogna innanzitutto partire dal come avviene la comunicazione oggi su Internet. 
Attualmente il sistema di file distribuito più diffuso per lo scambio di file è il <a  class="text-decoration-none" href="https://it.wikipedia.org/wiki/Hypertext_Transfer_Protocol">protocollo HTTP</a>
Un utente tramite un web browser, il client, chiede ad uno specifico web server delle informazioni e questo ritorna una risposta


<div class="text-center">
    <img src="docs/intro/img/http-1.png">
</div>


Problemi tecnici del server, errore umano o malfunzionamenti possono compromettere l'integrità dei dati e problemi ai pacchetti durante il percorso, la mancanza di indicizzazione da parte dei motori di ricerca, scadenza del dominio oppure censura possono comprometterne la reperibilità 


<div class="text-center">
    <img src="docs/intro/img/http-2.png" class="card-img-top mx-auto rounded" alt="..." style="width: 18em;">
</div>


L'utilizzo di un'architettura centralizzata se da un lato garantisce elevate prestazioni, dall'altro rende l'intera rete dipendente dalle sorti del web server che ospita i contenuti. Una risorsa viene infatti individuata attraverso la sua posizione all’interno della rete (URL - Uniform Resource <b>Locator</b>), per questo tale sistema è denominato <b>Location-based addressed</b>.


<div class="text-center">
    <img src="docs/intro/img/client-server.png" class="card-img-top mx-auto rounded" alt="..." style="width: 18em;">
</div>
    

Il protocollo HTTP è ottimale per lo scambio di piccole quantità di dati in modo veloce ed economico, l’incremento della quantità di dati e della dimensione dei file che circolano su internet comporta però nuove sfide:

- conservare e distribuire quantità crescenti di dati senza compromettere le prestazioni del sistema;
- svolgere lavoro computazionale su grandi dati e attraverso molteplici organizzazioni;
- trasmettere grandi volumi di dati in alta definizione sia in on-demand che in tempo reale;
- supportare il controllo versione e l’interoperabilità tra grandi datasets;
- prevenire la scomparsa accidentale, o volontaria, dei contenuti.


