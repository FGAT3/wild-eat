

// ----------------------------------------- NAVBAR ---------------------------------

// import { createCard } from "./functions/createCard";

const qualityCard = document.querySelector (".aboutUs-quality");
const qualityHidden = document.querySelector (".qualityHidden");

qualityCard.addEventListener ("click", function () {
    qualityCard.classList.toggle ("unhideArticle");
    qualityHidden.classList.toggle ("unhide");   
})

const availabilityCard = document.querySelector(".aboutUs-availability");
const availabilityHidden = document.querySelector(".availabilityHidden");

availabilityCard.addEventListener("click", function () {
    availabilityCard.classList.toggle ("unhideArticle");
    availabilityHidden.classList.toggle ("unhide");  
})

const teamCard = document.querySelector(".aboutUs-team");
const teamHidden = document.querySelectorAll(".teamHidden");

teamCard.addEventListener("click", function () {
    teamCard.classList.toggle ("unhideArticle");
    for(let i=0; i<teamHidden.length; i++) {
        teamHidden[i].classList.toggle ("unhidePicture");
    }  
})

// ----------------------------------------- HERO - MAIN ---------------------------------

const searchInput = document.querySelector('input')
searchInput.addEventListener('change', (event) => {
    const searchValue = event.target.value;
    // Vider le container parent a l'aide de .innerHTML = "" || Supprimer les autres card
    if(restaurants.filter((restaurant) => restaurant.name.toLowerCase().includes(searchValue.toLowerCase()) || restaurant.type.toLowerCase().includes(searchValue.toLowerCase()))) {
    // Creation des card avec le nom du restaurant || du filtre
    } 
})


// ----------------------------------------- SECTION - MAIN ---------------------------------

// import { restaurants } from "./data/cards.js";
import { allArray } from "./data/testArray.js";

import { createCards } from "./functions/createCard.js";
createCards('Burger', document.querySelector('.allCards'));
createCards('Brunch', document.querySelector('.allBrunch'));
createCards('Bars', document.querySelector('.allBars'));
createCards('Popular', document.querySelector('.all-cards-pop'));


// Constante pour n'afficher que les burgers dans la console
// const onlyBurgers = restaurants.filter((burgers) => burgers.category === 'Burger');
// console.log(onlyBurgers);

// const onlyBrunch = restaurants.filter((brunch) => brunch.category === 'Brunch');
// console.log(onlyBrunch);

// const onlyBars = restaurants.filter((bar) => bar.category === 'Bar');
// console.log(onlyBars);

// ----------------------------------------- SECTION - FILTER ---------------------------------

// fonction de filtrage générique (la méthode .filter retourne les éléments pour lesquels la callback est vrai)


// function filterByType(category) {
//     return restaurants.filter(restaurant => restaurant.category === category); // fonction callback anonyme car .filter prend en argument une fonction qui retourne true ou false
// }

function filterByType(category) {
    let filteredPlaces = [];

    allArray.forEach(item => {
        item.places.forEach(place => {
            if(place.category === category) {
                filteredPlaces.push(place);
            }
        })
    })
    return filteredPlaces;
}





const filteredBurger = filterByType("Burger"); // je viens stocker ces éléments dans de nouveaux tableaux
const filteredPizza = filterByType("Pizza");
const filteredBrunch = filterByType("Brunch");
const filteredBar = filterByType("Bars");


// ajoute une couleur au clique

const classRestaurant = document.getElementsByClassName("filter-restaurant");

function toggleColor(place) {
    if (place.classList.contains("color-clicked-filter")) {
        // si le bouton est déjà coloré supprime la couleur
        place.classList.remove("color-clicked-filter");
    } else {
        // sinon ajoute la couleur et désactive la couleur pour les autres boutons
        Array.from(classRestaurant).forEach(place => place.classList.remove("color-clicked-filter"));
        place.classList.add("color-clicked-filter");
    };
};

Array.from(classRestaurant).forEach(place => place.addEventListener('click', () => { toggleColor(place) }));


// récupération des id pour écouter les cliques dans le filtre

const idBurger = document.getElementById("Burger");
const idPizza = document.getElementById("Pizza");
const idBrunch = document.getElementById("Brunch");
const idBar = document.getElementById("Bar");


// filtre quand on clique en se basant sur la couleur du filtre

function clickFilter(idTypeOfRestaurant, filteredType) {
    idTypeOfRestaurant.addEventListener('click', () => {
        if (idTypeOfRestaurant.classList.contains("color-clicked-filter")) {
            console.log(filteredType);
        }
    });
};

clickFilter(idBurger, filteredBurger);
clickFilter(idPizza, filteredPizza);
clickFilter(idBrunch, filteredBrunch);
clickFilter(idBar, filteredBar);
