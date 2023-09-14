$(document).ready(function(){

    $('#intro').parent().addClass('active');
    $('#content').load("./docs/intro/intro.html");

    $('#intro').click(function(){
        $('.nav-link').removeClass('active');
        $('#intro').parent().addClass('active');
        $('#content').load("./docs/intro/intro.html");
    });

    $('#client-server').click(function(){
        $('.nav-link').removeClass('active');
        $(this).parent().addClass('active');
        $('#content').load("./docs/intro/client-server.html");
    });

    $('#modello').click(function(){
        $('.nav-link').removeClass('active');
        $(this).parent().addClass('active');
        $('#content').load("./docs/intro/model.html");
    });

    $('#ipfs').click(function(){
        $('.nav-link').removeClass('active');
        $(this).parent().addClass('active');
        $('#content').load("./docs/ipfs/ipfs-intro.html");
    });

    $('#cba').click(function(){
        $('.nav-link').removeClass('active');
        $(this).parent().addClass('active');
        $('#content').load("./docs/ipfs/content-based-addressing.html");
    });

    $('#multiformat').click(function(){
        $('.nav-link').removeClass('active');
        $(this).parent().addClass('active');
        $('#content').load("./docs/ipfs/multiformat.html");
    });

    $('#merkle').click(function(){
        $('.nav-link').removeClass('active');
        $(this).parent().addClass('active');
        $('#content').load("./docs/ipfs/merkle-dag.html");
    });

    $('#ipld').click(function(){
        $('.nav-link').removeClass('active');
        $(this).parent().addClass('active');
        $('#content').load("./docs/ipfs/ipld.html");
    });

    $('#p2p').click(function(){
        $('.nav-link').removeClass('active');
        $(this).parent().addClass('active');
        $('#content').load("./docs/libp2p/p2p.html");
    });

    $('#multiaddr').click(function(){
        $('.nav-link').removeClass('active');
        $(this).parent().addClass('active');
        $('#content').load("./docs/libp2p/multiaddress.html");
    });

    $('#routing').click(function(){
        $('.nav-link').removeClass('active');
        $(this).parent().addClass('active');
        $('#content').load("./docs/libp2p/routing.html");
    });

    $('#exchange').click(function(){
        $('.nav-link').removeClass('active');
        $(this).parent().addClass('active');
        $('#content').load("./docs/libp2p/exchange.html");
    });

    $('#pnet').click(function(){
        $('.nav-link').removeClass('active');
        $(this).parent().addClass('active');
        $('#content').load("./docs/libp2p/private-network.html");
    });

    $('#gateway').click(function(){
        $('.nav-link').removeClass('active');
        $(this).parent().addClass('active');
        $('#content').load("./docs/libp2p/ipfs-gateway.html");
    });

    $('#ipfs-cluster').click(function(){
        $('.nav-link').removeClass('active');
        $(this).parent().addClass('active');
        $('#content').load("./docs/ipfs-cluster/ipfs-cluster.html");
    });

    $('#ipwb').click(function(){
        $('.nav-link').removeClass('active');
        $(this).parent().addClass('active');
        $('#content').load("./docs/wayback/ipwb.html");
    });
   
    
});
