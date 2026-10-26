const CardsDictionary = [
    { id: 1, image: "Cards/Cloud.png" },
    { id: 2, image: "Cards/cloudsAndMoon.png" },
    { id: 3, image: "Cards/Frog.png" },
    { id: 4, image: "Cards/Heart.png" },
    { id: 5, image: "Cards/Moon.png" },
    { id: 6, image: "Cards/Star.png" },
    { id: 7, image: "Cards/strawberry.png" }
];

// The image displayed on the back of every card
const backImage = "Cards/back.png";

// Find the container in the HTML where the cards will go
const cardgrid = document.querySelector(".grid-container");

//Find score in the HTML
const scoreElement = document.querySelector(".score");

// 
let score = 0 ;

let cardslist = [];

let currentLevel = 0;

// Number of pairs in each level
const levels = [2, 4 , 4 , 6 , 6 , 8 ]; 

//Adding level 1 and the other levels

function gameLevels() {
    // Reset the cards for the new level
    cardslist = [];

    // Randomly select different cards for this level
    while (cardslist.length < levels[currentLevel]) {
        let card = CardsDictionary[
            Math.floor(Math.random() * CardsDictionary.length)
        ];

        // Only add the card if it is not already selected
        if (!cardslist.includes(card)) {
            cardslist.push(card);
        }
    }

    // Clear the previous level's cards
    cardgrid.innerHTML = "";

    // Start the game
    game();
}

function game() {
    // Duplicate the cards so each one has a matching pair
    cardslist = [...cardslist, ...cardslist];

    // Shuffle the cards into a random order
    cardslist = cardslist.sort(() => Math.random() - 0.5);


    // Variables used to check whether cards match
    let firstCard = null; // Stores the first card clicked
    let matchedPairs = 0; // Counts how many pairs have been matched
    let lockBoard = false; // Stops clicks while checking a pair


    // Loop through the list to create each card
    for (let i = 0; i < cardslist.length; i++) {

        const currentCard = cardslist[i];

        // Create a new HTML div for the card
        const cardElement = document.createElement("div");

        // Give the div the CSS class "card"
        cardElement.classList.add("card");

        // Store the card's ID so matching cards can be compared
        cardElement.setAttribute("data-id", currentCard.id);

        // Show the back of the card initially
        cardElement.style.backgroundImage = `url("${backImage}")`;


        // Run this code whenever a card is clicked
        cardElement.addEventListener("click", function () {

            // Ignore clicks while checking cards
            if (
                lockBoard ||
                cardElement.classList.contains("matched") ||
                cardElement === firstCard
            ) return;

            // Reveal the card's image
            cardElement.style.backgroundImage =
                `url("${currentCard.image}")`;


            // If this is the first card clicked, remember it
            if (firstCard === null) {
                firstCard = cardElement;

            } else {

                // A second card has been clicked
                lockBoard = true;

                // Compare the IDs of the two cards
                if (firstCard.dataset.id === cardElement.dataset.id) {

                    // The cards match, so keep them revealed
                    firstCard.classList.add("matched");
                    cardElement.classList.add("matched");

                    // Increase the number of matched pairs
                    matchedPairs++;

                    // Reset ready for the next pair
                    firstCard = null;
                    lockBoard = false;

                    // Update the score
                    score++;
                    scoreElement.textContent = `Score: ${score}`;

                    // Check if all pairs have been found
                    
                    // Check if all pairs have been found
                    if (matchedPairs === cardslist.length / 2) {
                        setTimeout(function () {

                            // Move to the next level
                            currentLevel++;

                            if (currentLevel < levels.length) {
                                gameLevels();
                            }
                            else {
                                cardgrid.innerHTML = "";

                                // Add a class to change the grid layout
                                cardgrid.classList.add("game-won");

                                // Create the winning paragraph
                                const winMessage = document.createElement("p");
                                winMessage.textContent = "You Won!!";
                                winMessage.classList.add("win-message");

                                cardgrid.appendChild(winMessage);
                            }

                        }, 1000);
                    }


                } else {

                    // The cards do not match, so wait one second
                    setTimeout(function () {

                        // Turn both cards face down again
                        firstCard.style.backgroundImage =
                            `url("${backImage}")`;

                        cardElement.style.backgroundImage =
                            `url("${backImage}")`;

                        if (score > 0){
                            score--;
                            scoreElement.textContent = `Score: ${score}`;
                        }
                        
                        // Reset ready for another turn
                        firstCard = null;
                        lockBoard = false;
                        
                    }, 1000);
                }
            }
        });

        // Add the card to the grid on the webpage
        cardgrid.appendChild(cardElement);
    }
}




// Start the first level
gameLevels();