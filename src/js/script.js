/* eric/katbiznis
*
* /src/js/script.js - main script for katbiznis
*
* code by closquet.eric@live.be
* started at 09/02/2017
*
*/

const $CardRecto = document.querySelector(".section--recto"),
    $CardVerso = document.querySelector(".section--verso"),
    $ButtonSwipe = document.querySelector(".a--swipe");

let cardState = "recto";

function fEnableVerso() {
    $CardVerso.classList.add("front");
    $CardVerso.classList.remove("back");
};
function fDisableVerso() {
    $CardVerso.classList.add("back");
    $CardVerso.classList.remove("front");
};
function fEnableRecto() {
    $CardRecto.classList.add("front");
    $CardRecto.classList.remove("back");
};
function fDisableRecto() {
    $CardRecto.classList.add("back");
    $CardRecto.classList.remove("front");
};

function fSwipe(oEvent) {
    oEvent.preventDefault();
    if (cardState === "recto"){
        fEnableVerso();
        setTimeout(fDisableRecto, 500);
        cardState = "verso";
    }else {
        fEnableRecto();
        setTimeout(fDisableVerso, 500);
        cardState = "recto";
    }
};

/*****************************************************************************************************/
/*** la fonction qui démarre le script (une fois la page Web complètement téléchargée et affichée) ***/
/*****************************************************************************************************/

/* La fonction fPageIsLoaded gère le chargement de la page (démarrage du script) et
 se contente de régler l'horloge (aiguilles + nombres)
    - paramètres : /
    - retour : /
*/
var fPageIsLoaded = function () {
    // code pour démarrer le script ici
    $ButtonSwipe.addEventListener("clic", fSwipe, false);
};
//gestion de l'événement "load" pour démarrer le script
window.addEventListener("load", fPageIsLoaded, false);
