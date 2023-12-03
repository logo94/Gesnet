<div class="text-center">
    <h1>Exchange</h1>
    <hr>
</div>
Lo scambio di pacchetti avviene tramite il protocollo BitSwap il cui principio di funzionamento può essere rappresentato attraverso il seguente schema:
<br>
<div class="text-center">
    <img src="docs/libp2p/img/bitswap-flow.png">
</div>
<br>
Il processo di richiesta ed invio dei dati da parte dei nodi avviene secondo la sequenza:

1. i file vengono suddivisi in blocchi di dati, ovvero le unità più piccole trasferibili;
2. i blocchi vengono richiesti e inviati attraverso un’interfaccia API essenziale
<div class="text-center">
<code>
get(CID)

put(CID)
</code>
</div>

3. i file richiesti vengono ricercati a livello locale, nel caso il contenuto non sia presente, sia avvia una sessione BitSwap;
4. un peer invia alla rete un messaggio WANT-HAVE che include una ‘wantlist’; inizialmente una wantlist contiene esclusivamente i root CIDs e non è a conoscenza del resto dei blocchi nel DAG
5. i peer in possesso dei contenuti richiesti rispondo alla richiesta (i CIDs inclusi nella wantlist vengono scaricati localmente)
6. le richieste successive vengono inoltrate ai peer presenti nella sessione, questi saranno in possesso del resto dei blocchi necessari a ricomporre i DAG dei root CIDs richiesti

<div class="text-center">
    <img src="docs/libp2p/img/bitswap-1.png">
</div>

7. mentre il messaggio WANT-HAVE è utilizzato per scoprire chi è in possesso dei contenuti, WANT-BLOCK inoltra direttamente la richiesta di invio dei contenuti 
8. una volta ottenuti i blocchi desiderati per terminare la comunicazione il peer invia ai nodi presenti nella sessione il messaggio CANCEL

<div class="text-center">
    <img src="docs/libp2p/img/bitswap-2.png">
</div>
