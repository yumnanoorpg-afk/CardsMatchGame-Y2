const CardsDictionary = [
    { id: 1, image: "Cards/Cloud.png" },
    { id: 2, image: "Cards/cloudsAndMoon.png" },
    { id: 3, image: "Cards/Frog.png" },
    { id: 4, image: "Cards/Heart.png" },
    { id: 5, image: "Cards/Moon.png" },
    { id: 6, image: "Cards/Star.png" },
    { id: 7, image: "Cards/strawberry.png" }

]

const backImage = "Cards/back.png"; // set the background image for the cards

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
cardslist = cardslist.sort(() => Math.random() - 0.5); // shuffle the cardslist randomly


for (let i = 0; i < cardslist.length; i++) {
    const currentCard = cardslist[i];
    const cardElement = document.createElement("div");

    cardElement.classList.add("card");
    cardElement.setAttribute("data-id", currentCard.id);

    // Set the card back
    cardElement.style.backgroundImage = `url("${backImage}")`;

    // Listen for clicks on this card
    cardElement.addEventListener("click", function () {
        console.log("Card clicked!", currentCard.image);

        cardElement.style.backgroundImage =
            `url("${currentCard.image}")`;
    });

    cardgrid.appendChild(cardElement);
}


//add card match logic here
// also would be nice to add levels 