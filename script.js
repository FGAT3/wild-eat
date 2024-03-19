// ----------------------------------------- NAVBAR ---------------------------------

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

// ----------------------------------------- SECTION - MAIN ---------------------------------

let container = document.querySelector('.allCards');
let containerBrunch = document.querySelector(".allBrunch")
let containerBar = document.querySelector(".allBars")
let containerPop = document.querySelector(".all-cards-pop")

function createCard() {
    const card = document.createElement('article');
    card.classList.add('cards');
    container.appendChild(card);

    const cardTitle = document.createElement('p');
    cardTitle.innerText = "East Street";
    cardTitle.classList.add('nameFirm');
    card.appendChild(cardTitle);

    const cardDistance = document.createElement('p');
    cardDistance.innerText = "(à 268m)";
    cardDistance.classList.add('distance');
    card.appendChild(cardDistance);

    const cardDesc = document.createElement('p');
    cardDesc.innerText = "Le vrai burger New - Yorkais, ses frites, ses cookies";
    cardDesc.classList.add('desc');
    card.appendChild(cardDesc);

    const cardMore = document.createElement('a');
    cardMore.setAttribute('href', '');
    cardMore.classList.add('knowMore');
    cardMore.innerText = "En savoir plus";
    card.appendChild(cardMore);

    const articleAvis = document.createElement("article");
    articleAvis.classList.add("avis-note-prix");
    card.appendChild(articleAvis);

    const avis = document.createElement("p");
    avis.classList.add("avis");
    avis.innerText = "Avis : 293";
    articleAvis.appendChild(avis);

    const note = document.createElement("p");
    note.classList.add("note");
    note.innerText = "Note : 4,8/5";
    articleAvis.appendChild(note);

    const prix = document.createElement("p");
    prix.classList.add("prix");
    prix.innerText = "Prix : 15,70€";
    articleAvis.appendChild(prix);

};
createCard();
createCard();
createCard();

function createCardBrunch() {
    const card = document.createElement('article');
    card.classList.add('cards-brunch');
    containerBrunch.appendChild(card);

    const cardTitle = document.createElement('p');
    cardTitle.innerText = "Au Brunch";
    cardTitle.classList.add('nameFirm');
    card.appendChild(cardTitle);

    const cardDistance = document.createElement('p');
    cardDistance.innerText = "(à 423m)";
    cardDistance.classList.add('distance');
    card.appendChild(cardDistance);

    const cardDesc = document.createElement('p');
    cardDesc.innerText = "Un moment de partage autour d'un bon brunch";
    cardDesc.classList.add('desc');
    card.appendChild(cardDesc);

    const cardMore = document.createElement('a');
    cardMore.setAttribute('href', '');
    cardMore.classList.add('knowMore');
    cardMore.innerText = "En savoir plus";
    card.appendChild(cardMore);

    const articleAvis = document.createElement("article");
    articleAvis.classList.add("avis-note-prix");
    card.appendChild(articleAvis);

    const avis = document.createElement("p");
    avis.classList.add("avis");
    avis.innerText = "Avis : 898";
    articleAvis.appendChild(avis);

    const note = document.createElement("p");
    note.classList.add("note");
    note.innerText = "Note : 4,4/5";
    articleAvis.appendChild(note);

    const prix = document.createElement("p");
    prix.classList.add("prix");
    prix.innerText = "Prix : 12,80€";
    articleAvis.appendChild(prix);
}

createCardBrunch();
createCardBrunch();
createCardBrunch();
createCardBrunch();

function createCardBar() {
    const card = document.createElement('article');
    card.classList.add('cards-bar');
    containerBar.appendChild(card);

    const cardTitle = document.createElement('p');
    cardTitle.innerText = "My Beers";
    cardTitle.classList.add('nameFirm');
    card.appendChild(cardTitle);

    const cardDistance = document.createElement('p');
    cardDistance.innerText = "(à 308m)";
    cardDistance.classList.add('distance');
    card.appendChild(cardDistance);

    const cardDesc = document.createElement('p');
    cardDesc.innerText = "Boire un verre seul ou avec des amis";
    cardDesc.classList.add('desc');
    card.appendChild(cardDesc);

    const cardMore = document.createElement('a');
    cardMore.setAttribute('href', '');
    cardMore.classList.add('knowMore');
    cardMore.innerText = "En savoir plus";
    card.appendChild(cardMore);

    const articleAvis = document.createElement("article");
    articleAvis.classList.add("avis-note-prix");
    card.appendChild(articleAvis);

    const avis = document.createElement("p");
    avis.classList.add("avis");
    avis.innerText = "Avis : 487";
    articleAvis.appendChild(avis);

    const note = document.createElement("p");
    note.classList.add("note");
    note.innerText = "Note : 4,9/5";
    articleAvis.appendChild(note);

    const prix = document.createElement("p");
    prix.classList.add("prix");
    prix.innerText = "Prix : 8,70€";
    articleAvis.appendChild(prix);
}

createCardBar();
createCardBar();
createCardBar();
createCardBar();

function createCardPop() {
    const card = document.createElement('article');
    card.classList.add('cards-populaires');
    containerPop.appendChild(card);

    const cardTitle = document.createElement('p');
    cardTitle.innerText = "BIBIBAP";
    cardTitle.classList.add('nameFirm');
    card.appendChild(cardTitle);

    const articleAvis = document.createElement("article");
    articleAvis.classList.add("avis-note-prix");
    card.appendChild(articleAvis);

    const avis = document.createElement("p");
    avis.classList.add("avis");
    avis.innerText = "Avis : 1007";
    articleAvis.appendChild(avis);

    const note = document.createElement("p");
    note.classList.add("note");
    note.innerText = "Note : 4,8/5";
    articleAvis.appendChild(note);

    const prix = document.createElement("p");
    prix.classList.add("prix");
    prix.innerText = "Prix : 13,70€";
    articleAvis.appendChild(prix);
};

createCardPop();
createCardPop();
createCardPop();