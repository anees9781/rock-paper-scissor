# Rock Paper Scissors Game

This is a simple web-based Rock Paper Scissors game that allows a user to play against the computer. The game tracks both the user's and the computer's scores, and provides real-time feedback on each round's outcome.

Features

 User can choose between "Rock", "Paper", or "Scissors".
Computer's choice is generated randomly.
 Displays a message showing whether the user won, lost, or tied.
Scores are updated after each round.
Game status and feedback are shown via text and background color.

Technologies Used

HTML The structure and layout of the page.
CSS: Basic styling and dynamic changes to message background.
JavaScript: The logic of the game, including event handling, scorekeeping, and decision-making.

How to Play

1. Open the game in your browser.
2. Choose your move by clicking on one of the options: "Rock", "Paper", or "Scissors".
3. The computer will make its own random choice.
4. The game will display who won the round and update the score.
5. Keep playing until you’re satisfied!

Code Explanation

Functions

genCompChoice(): Generates the computer's random choice from "rock", "paper", or "scissors".
  
drawGame(): Displays a message when both the user and the computer select the same option.
  
`showWinner(userWin, userChoice, compChoice)` Determines the winner, updates the score, and displays a message to show who won or lost.
  
`playGame(userChoice)` The main function that runs when the user clicks on an option. It compares the user’s choice with the computer’s and determines the outcome of the round.

Event Listeners

- The game listens for user clicks on any of the three choices ("Rock", "Paper", or "Scissors"). When the user makes a choice, the game triggers the main function `playGame()` to determine the result.



