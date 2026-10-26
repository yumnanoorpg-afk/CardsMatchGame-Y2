##Project Overview: 

The aim of this project is to develop a classic card matching game using JavaScript, HTML and CSS. The game will test the player's memory by asking them to find matching pairs of hidden cards.

At the start of the game, all cards will be placed face down. The player will select two cards to reveal their contents. If the cards match, they will remain visible and the player's score will increase by one point. If the cards do not match, they will be hidden again after a short delay.

The target audience is people of all ages, so the game should be simple to understand, accessible and enjoyable for both younger and older players. Bellow are examples of some people that will be interested in this game.

Person 1: Young Child

- Age: 8

- Lifestyle: The user is a primary school student who enjoys playing games. They may have a short attention span and prefer activities that are fun, simple and easy to understand.

- Requirements: The user wants a colourful and enjoyable game with simple instructions and easy-to-recognise symbols. The cards should be large enough to select easily by tapping the screen.

Person 2: Teenager

- Age: 16

- Lifestyle: The user is a secondary school student who may spend their free time playing video games, using social media and browsing the internet. They enjoy activities that challenge their skills and provide opportunities to improve and compete against their previous results.

- Requirements: The user wants a quick and engaging game that challenges their memory. They would like the option to restart the game and improve their performance by finding matching pairs more efficiently.

Person 3: Older Adult

- Age: 65

- Lifestyle: The user may be retired or working part-time and may enjoy relaxing activities during their free time, such as puzzles, reading or spending time with family. They may use a computer, tablet or smartphone for entertainment and prefer technology that is straightforward to use.

- Requirements: The user wants a relaxing and easy-to-play game with readable text, clear card symbols and simple controls. The score should be displayed clearly so they can easily track their progress.

##Functional and Non-Functional Requirements

Functional requirements:

- The game should create a set of cards containing matching pairs.
- The cards should be shuffled at the beginning of each game so that the pairs appear in different positions.
- All cards should start face down so the player cannot see the symbols.
- The player should be able to click or tap a card to reveal its symbol.
- The player should only be able to select two cards at a time.
- If the cards match, they should stay visible and the player's score should increase by one point.
- If the cards do not match, they should turn face down again after a short delay.
- The game should stop the player from selecting more cards while two mismatched cards are being checked.
- The game should display the player's score and show how many pairs have been found.
- When all the pairs have been matched, the game should display a message congratulating the player.

Non-Functional requirements:
- The game should have a simple and colourful design that is suitable for people of all ages.
- The instructions should be clear and easy to understand, even for someone who has never played the game before.
- The cards and buttons should be large enough to select easily using a mouse or touchscreen.
- The text and symbols should be clear and easy to see, with good contrast between the colours.
- The game should respond quickly when a player selects a card so that gameplay feels smooth.


##Success criteria and Test plan:

| Test ID | Test Input / Action | Expected Output | Actual Output | Result |
|---|---|---|---|---|
| 1 | Open the game | The title, instructions, cards and score are displayed. |  |  |
| 2 | Click on a card | The card's image is revealed. | |  |
| 3 | Click two matching cards | Both cards remain visible and the score increases by 1. | |  |
| 4 | Click two non-matching cards | Both cards turn face down after a short delay. The score decreases by 1 if above 0. |  |  |
| 5 | Click the same card twice | The second click is ignored. |  ||
| 6 | Click another card while two cards are being checked | Further clicks are ignored until the comparison is complete. |  |  |
| 7 | Match all pairs in a level | The next level loads with a new selection of cards. |  | |
| 8 | Complete all six levels | The game progresses through all six levels. | |  |
| 9 | Complete the final level | All cards disappear and "You Won!!" appears in the centre of the screen. | | |
| 10 | Make a non-matching pair when the score is 0 | The score remains at 0 and does not become negative. |  | |

##Design: 

<img width="1015" height="501" alt="image" src="https://github.com/user-attachments/assets/b8c1652a-3c8d-411f-b51b-d783b0c291f2" />

##Game Flow chart:

<img width="712" height="747" alt="image" src="https://github.com/user-attachments/assets/32b96586-cb6b-4c6a-8b93-966859527dea" />





##Final Testing:

| Test ID | Test Input / Action | Expected Output | Actual Output | Result |
|---|---|---|---|---|
| 1 | Open the game | The title, instructions, cards and score are displayed. | The game loads correctly with all elements visible. <img width="1102" height="776" alt="image" src="https://github.com/user-attachments/assets/7fd650e2-c07e-494c-8409-b3a9bde57ac3" />
 | Pass |
| 2 | Click on a card | The card's image is revealed. | The selected card's image is revealed. <img width="1070" height="677" alt="image" src="https://github.com/user-attachments/assets/548a2427-1039-49d0-99be-15826bd1e9ff" />
 | Pass |
| 3 | Click two matching cards | Both cards remain visible and the score increases by 1. | Both cards remain visible and the score increases by 1. <img width="1025" height="726" alt="image" src="https://github.com/user-attachments/assets/92bbc89f-870f-4e4c-8f3f-f0059855cca7" />
 | Pass |
| 4 | Click two non-matching cards | Both cards turn face down after a short delay. The score decreases by 1 if above 0. | Both cards turn face down and the score decreases if above 0. <img width="1041" height="636" alt="image" src="https://github.com/user-attachments/assets/b089b6b5-0595-4f51-a9d4-5c4c3ba6df58" />
| Pass |
| 5 | Click the same card twice | The second click is ignored. | The second click is ignored. <img width="1061" height="641" alt="image" src="https://github.com/user-attachments/assets/04a4b295-0ad5-492e-a65d-e4b630bc3e52" />
| Pass |
| 6 | Click another card while two cards are being checked | Further clicks are ignored until the comparison is complete. | Further clicks are ignored during the comparison.<img width="1002" height="826" alt="image" src="https://github.com/user-attachments/assets/8079ed27-9d5c-4142-b74d-d05aeb2c0cd7" />
 | Pass |
| 7 | Match all pairs in a level | The next level loads with a new selection of cards. | The next level loads correctly.<img width="1002" height="826" alt="image" src="https://github.com/user-attachments/assets/2f64ac63-2ac8-4c21-8b4a-cb71072dc48b" />
| Pass |
| 8 | Complete all six levels | The game progresses through all six levels. | All six levels can be completed. | Pass |
| 9 | Complete the final level | All cards disappear and "You Won!!" appears in the centre of the screen. | All cards disappear and the winning message appears.<img width="796" height="612" alt="image" src="https://github.com/user-attachments/assets/20803b7a-47e6-4b29-b4c3-ea24cacc3d6c" />
 | Pass |
| 10 | Make a non-matching pair when the score is 0 | The score remains at 0 and does not become negative. | The score remains at 0. | Pass |

##Evaluation
The completed Pairs Game meets its main requirements because players can reveal cards, find matching pairs, earn points and progress through six levels. The cards are randomly selected and shuffled at the beginning of each level, making the game less predictable and encouraging players to use their memory. The scoring system rewards correct matches and deducts points for incorrect matches, while preventing the score from falling below zero. Once all levels have been completed, the cards disappear and a "You Won!!" message appears in the centre of the screen. Overall, the game meets its main objectives and provides a playable memory game. However, adding a restart button, a level indicator and a timer could improve the experience by allowing players to track their progress and challenge themselves further.

One of the main strengths of the game is its simple design, which makes it easy to understand without needing complicated instructions. The use of images makes the game more visual and engaging, while the increasing number of pairs across the levels gradually increases the difficulty. The scoring system also gives players feedback on their performance and encourages them to find more matches. However, the game has some limitations, including the lack of a restart button, a high-score system and a timer. The fixed card sizes may also make the layout difficult to use on smaller screens. These limitations could be addressed in future development by making the layout responsive and adding features that encourage players to replay the game.

##Key Decisions Made
Several design decisions were made to make the Pairs Game easy to use, visually appealing and enjoyable for the player. A grid layout was chosen to organise the cards neatly and ensure that they could be selected easily. Images were used instead of text because the game is based on visual memory, making it more engaging for the player. Random card selection was implemented so that the same images would not be selected more than once within a level, while shuffling the duplicated cards ensured that matching pairs would appear in different positions. Six levels were included, with the number of pairs increasing as the player progresses, to gradually increase the difficulty. A scoring system was added to reward correct matches and deduct points for incorrect matches, with a condition to prevent the score from becoming negative. A short delay was also included before mismatched cards turn face down again, giving the player enough time to view the images and remember their positions. The lockBoard variable was used to prevent additional clicks while two cards were being checked, helping to avoid problems with the matching process. A pink background was chosen to create a consistent appearance and make the game visually appealing. Finally, a winning message was designed to appear in the centre of the screen after all levels were completed, providing clear feedback that the player had successfully finished the game. These decisions helped create a game that was straightforward to use while still providing a challenge.

During development, the HTML, CSS and JavaScript were kept in separate files to make the code easier to organise, understand and maintain. The gameLevels() function was used to select the cards required for each level and clear the previous grid, while the game() function handled card duplication, shuffling, displaying the cards and checking matches. This separation helped organise the program into smaller tasks. Several challenges were encountered, including ensuring that the correct number of unique images was selected for each level, preventing additional card clicks while a pair was being checked, and making sure that the score did not fall below zero. These problems were addressed using a loop to select unique cards, the lockBoard variable to control card selection and a condition to check the score before deducting points. Another issue occurred when the winning message did not appear as intended after the final level. 
