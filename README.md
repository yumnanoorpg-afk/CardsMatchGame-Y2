Project Overview: 
The aim of this project is to develop a classic card matching game using JavaScript, HTML and CSS. The game will test the player's memory by asking them to find matching pairs of hidden cards.

At the start of the game, all cards will be placed face down. The player will select two cards to reveal their contents. If the cards match, they will remain visible and the player's score will increase by one point. If the cards do not match, they will be hidden again after a short delay.

The target audience is people of all ages, so the game should be simple to understand, accessible and enjoyable for both younger and older players. Bellow are examples of some people that will be interested in this game.

Person 1: Young Child

Age: 8

Lifestyle: The user is a primary school student who enjoys playing games. They may have a short attention span and prefer activities that are fun, simple and easy to understand.

Requirements: The user wants a colourful and enjoyable game with simple instructions and easy-to-recognise symbols. The cards should be large enough to select easily by tapping the screen.

Person 2: Teenager

Age: 16

Lifestyle: The user is a secondary school student who may spend their free time playing video games, using social media and browsing the internet. They enjoy activities that challenge their skills and provide opportunities to improve and compete against their previous results.

Requirements: The user wants a quick and engaging game that challenges their memory. They would like the option to restart the game and improve their performance by finding matching pairs more efficiently.

Person 3: Older Adult

Age: 65

Lifestyle: The user may be retired or working part-time and may enjoy relaxing activities during their free time, such as puzzles, reading or spending time with family. They may use a computer, tablet or smartphone for entertainment and prefer technology that is straightforward to use.

Requirements: The user wants a relaxing and easy-to-play game with readable text, clear card symbols and simple controls. The score should be displayed clearly so they can easily track their progress.

Functional requirements:

-The game should create a set of cards containing matching pairs.
-The cards should be shuffled at the beginning of each game so that the pairs appear in different positions.
-All cards should start face down so the player cannot see the symbols.
-The player should be able to click or tap a card to reveal its symbol.
-The player should only be able to select two cards at a time.
-If the cards match, they should stay visible and the player's score should increase by one point.
-If the cards do not match, they should turn face down again after a short delay.
-The game should stop the player from selecting more cards while two mismatched cards are being checked.
-The game should display the player's score and show how many pairs have been found.
-When all the pairs have been matched, the game should display a message congratulating the player.

Non-Functional requirements:
-The game should have a simple and colourful design that is suitable for people of all ages.
-The instructions should be clear and easy to understand, even for someone who has never played the game before.
-The cards and buttons should be large enough to select easily using a mouse or touchscreen.
-The text and symbols should be clear and easy to see, with good contrast between the colours.
-The game should respond quickly when a player selects a card so that gameplay feels smooth.


Sucess criteria and Test plan:

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



##Game Flow chart:
<img width="712" height="747" alt="image" src="https://github.com/user-attachments/assets/32b96586-cb6b-4c6a-8b93-966859527dea" />



o design evidence, including mock-ups, pseudocode and diagrams;
o annotated screenshots of the main features;
Key Decisions made:
Several design decisions were made to make the Pairs Game easy to use and enjoyable for the player. A grid layout was chosen to organise the cards neatly and make them easy to select. Images were used instead of text on the cards to make the game more visual and engaging. The cards are shuffled randomly at the beginning of each level so that their positions are different each time, making the game less predictable. Multiple levels were included, with the number of pairs increasing as the player progresses, to gradually increase the difficulty and challenge the player's memory. A scoring system was added to reward the player for finding matching pairs and deduct points for incorrect matches, encouraging the player to improve their performance. A short delay was included before mismatched cards turn face down again, giving the player enough time to see the images. Finally, a winning message appears in the centre of the screen when all levels are completed, providing clear feedback that the player has successfully finished the game. A pink background was chosen to create a consistent appearance and make the game visually appealing.
o a test plan and evidence of testing;
o examples of errors identified, fixes made and retesting;
o references and credits where appropriate.


##Final Testing:

| Test ID | Test Input / Action | Expected Output | Actual Output | Result |
|---|---|---|---|---|
| BB01 | Open the game | The title, instructions, cards and score are displayed. | The game loads correctly with all elements visible. | Pass |
| BB02 | Click on a card | The card's image is revealed. | The selected card's image is revealed. | Pass |
| BB03 | Click two matching cards | Both cards remain visible and the score increases by 1. | Both cards remain visible and the score increases by 1. | Pass |
| BB04 | Click two non-matching cards | Both cards turn face down after a short delay. The score decreases by 1 if above 0. | Both cards turn face down and the score decreases if above 0. | Pass |
| BB05 | Click the same card twice | The second click is ignored. | The second click is ignored. | Pass |
| BB06 | Click another card while two cards are being checked | Further clicks are ignored until the comparison is complete. | Further clicks are ignored during the comparison. | Pass |
| BB07 | Match all pairs in a level | The next level loads with a new selection of cards. | The next level loads correctly. | Pass |
| BB08 | Complete all six levels | The game progresses through all six levels. | All six levels can be completed. | Pass |
| BB09 | Complete the final level | All cards disappear and "You Won!!" appears in the centre of the screen. | All cards disappear and the winning message appears. | Pass |
| BB10 | Make a non-matching pair when the score is 0 | The score remains at 0 and does not become negative. | The score remains at 0. | Pass |


Part B – Evaluation and Review
1. A critical evaluation of how well the completed application meets the requirements.
2. Discussion of the project’s overall success, strengths and limitations.
3. Reflection on the development process, including key decisions, challenges and improvements.
4. Analysis of at least one significant technical problem and how it was resolved.
5. Comparison of the development approaches considered and justification of the approach selected.
6. Comparison of relevant current and emerging browser-based development technologies.
7. Comparison of the tools and design methods used during the project and justification of their suitability.
8. A professional-development reflection based on the approved JavaScript course, explaining what was learned and how it was applied.
9. Harvard-formatted references and credits where appropriate.
You must also provide evidence of completing the approved JavaScript course, such as a screenshot or certificate showing your name, the course
or modules completed and the completion date.
