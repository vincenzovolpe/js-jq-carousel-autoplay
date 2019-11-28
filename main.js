// Dichiaro una variabile in cui memorizzo l'indice dell'immagine attuale
var totaleimmagini = 5; // Variabile che indica il numero delle immagini gestite
var immagine_attuale = 0; // Variabile in cui memorizzi l'indice delle immagini
var autoplay; // Variabile a cui assegno il setInterval da passare al clearInterval
var attesa = 3000; // variabile che indica i secondi di caricamento di una nuova immagine
$(document).ready(function(){
    // Mostra la prima immagine
    showimage();
    // Faccio partire lo slider in automatico
    startAutoplay();
    // Cambio immagine cliccando sul pallino
    $('.punto').click(function() {
        stopAutoplay();
        hideimage();
        // Aggiorno l'indice dell'immagine attuale
        //immagine_attuale = $(this).data('numeroimmagine') - 1;
        // Posso usare index() invece di considerare il data-numeroimmagine definito per il singolo pallino
        immagine_attuale = $(this).index();
        showimage();
    });
    // Cambio immagine cliccando sulla freccia destra
    $('.avanti').click(function() {
        stopAutoplay();
        forward();
    });
    // Cambio immagine cliccando sulla freccia sinistra
    $('.indietro').click(function() {
        stopAutoplay();
        back();
    });
    // Faccio partire o stoppo l'autoplay
    $('#loader').click(function() {
        if ($('#loader').text() !== 'Stop') {
            $('#loader').html(("Stop"));
            startAutoplay();
        } else {
            stopAutoplay();
        }
    })
});
// Funzione per lo scorrimento delle immagini in avanti
function forward() {
    hideimage();
    if (immagine_attuale < totaleimmagini) {
        immagine_attuale++;
    } else {
        immagine_attuale = 0;
    }
    showimage();
};
// Funzione per lo scorrimento delle immagini indietro
function back() {
    hideimage();
    if (immagine_attuale > 0) {
        immagine_attuale--;
    } else {
        immagine_attuale = totaleimmagini;
    }
    showimage();
};
// Funzione per mostrare l'immagine e colorare il pallino
function showimage() {
    // Mostro l'immagine successiva
    $('.immagine-carosello').eq(immagine_attuale).show();
    // Aggiungo il colore nero al pallino
    $('.punto').eq(immagine_attuale).addClass('nero');
}
// Funzione per nascondere l'immagini e togliere il  colore al pallino il pallino
function hideimage() {
    // Nascondo l'immagine attualmente presente
    $('.immagine-carosello').eq(immagine_attuale).hide();
    // Rimuovo il colore nero dal pallino mediante l'indice dell'immagine attuale
    $('.punto').eq(immagine_attuale).removeClass('nero');
}
// Funzione che ferma l'autoplay
function stopAutoplay() {
  clearInterval(autoplay);
  $('#loader').html(("Play"));
};
// Funzione che fà partire l'autoplay
function startAutoplay() {
    // Autoplay  dello slider
    autoplay = setInterval(function() {
        forward();
    }, attesa);
}
