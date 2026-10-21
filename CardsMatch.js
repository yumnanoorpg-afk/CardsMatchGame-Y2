const CardsDictionary = [,
    { id: 1, image: "Cards/Cloud.png" },
    { id: 2, image: "Cards/cloudsAndMoon.png" },
    { id: 3, image: "Cards/Frog.png" },
    { id: 4, image: "Cards/Heart.png" },
    { id: 5, image: "Cards/Moon.png" },
    { id: 6, image: "Cards/Star.png" },
    { id: 7, image: "Cards/strawberry.png" },

]

const backgroundImage = "Cards/back.png"; // set the background image for the cards

//goal is to add items(cards) into the container randomly

const cardgrid = document.querySelector(".grid-container"); // .querySelector(".grid-container") is used to locate an element in a html document with the class "grid-container".

let card = CardsDictionary[Math.floor(Math.random() * CardsDictionary.length)]; //   randomly select a card from the CardsDictionary

let cardslist = []; 


//
while (cardslist.length < 2) {
    let card = CardsDictionary[Math.floor(Math.random() * CardsDictionary.length)]; // randomly select a card from the CardsDictionary
    if (!cardslist.includes(card)) { // check if the card is already in the cardslist
        cardslist.push(card); // add the card to the cardslist
    }
}

cardslist = [...cardslist, ...cardslist]; // duplicate the cardslist to have pairs of cards
for (i in cardslist) {
    let card = document.createElement("div");
    card.classList.add("card"); // add the class "card" to the card element
    card.setAttribute("data-id", cardslist[i].id);
    card.style.backgroundImage = `url(${cardslist[i].image})`; // set the background image of the card to the image of the card in the cardslist
    cardgrid.appendChild(card); // add the card to the cardgrid
}