// Dichiaro una variabile in cui memorizzo l'indice dell'immagine attuale
var immagine_attuale = 0;
var autoplay;
$(document).ready(function(){
    // Mostra la prima immagine
    showimage();
    startAutoplay();
    // Cambio immagine cliccando sul pallino
    $('.punto').click(function() {
        stopAutoplay();
        hideimage();
        // Aggiorno l'indice dell'immagine attuale
        immagine_attuale = $(this).data('numeroimmagine') - 1;
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
    if (immagine_attuale < 5) {
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
        immagine_attuale = 5;
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
    }, 2000);
}
