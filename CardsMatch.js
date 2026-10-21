const CardsDictionary = [
    { id: 1, image: "Cards/back.png" },
    { id: 2, image: "Cards/Cloud.png" },
    { id: 3, image: "Cards/cloudsAndMoon.png" },
    { id: 4, image: "Cards/Frog.png" },
    { id: 5, image: "Cards/Heart.png" },
    { id: 6, image: "Cards/Moon.png" },
    { id: 7, image: "Cards/Star.png" },
    { id: 8, image: "Cards/strawberry.png" },

]

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

