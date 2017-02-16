/* eric/katbiznis
*
* /src/js/script.js - main script for katbiznis
*
* code by closquet.eric@live.be
* started at 09/02/2017
*
*/

const $Card = document.querySelector(".card");
const $ButtonSwipe = document.querySelector(".a--swipe");


const fSwipe = function (e) {
    e.preventDefault();
    $Card.classList.toggle('flipped');
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
