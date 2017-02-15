/* eric/katbiznis
*
* /src/js/script.js - main script for katbiznis
*
* code by closquet.eric@live.be
* started at 09/02/2017
*
*/

const $CardRecto = document.querySelector(".section--recto");
const $CardVerso = document.querySelector(".section--verso");
const $ButtonSwipe = document.querySelector(".a--swipe");

let sCardState = "recto";

const fEnableVerso = function () {
    $CardVerso.classList.add("front");
    $CardVerso.classList.remove("back");
};
const fDisableVerso = function () {
    $CardVerso.classList.add("back");
    $CardVerso.classList.remove("front");
};
const fEnableRecto = function () {
    $CardRecto.classList.add("front");
    $CardRecto.classList.remove("back");
};
const fDisableRecto = function () {
    $CardRecto.classList.add("back");
    $CardRecto.classList.remove("front");
};


}
const fSwipe = function (e) {
    e.preventDefault();
    if (sCardState === "recto"){
        fDisableRecto();
        setTimeout(fEnableVerso, 1000);
        sCardState = "verso";
    }else {
        fDisableVerso();
        setTimeout(fEnableRecto, 1000);
        sCardState = "recto";
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
    $ButtonSwipe.addEventListener("click", fSwipe, false);
};
//gestion de l'événement "load" pour démarrer le script
window.addEventListener("load", fPageIsLoaded, false);
