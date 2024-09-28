let userScore =0;
let compScore =0;

let select = document.querySelectorAll(".select")
let selects =document.querySelector(".selects")
let message = document.querySelector("#message")
const userScore1 =document.querySelector("#user_score")
const compScore1 =document.querySelector("#com_score")

const genCompChoice=()=>{
    const choice =["paper","rock","scissors"]
    const idx= Math.floor(Math.random()*3)
    return choice[idx]
    
}
const drawGame = () => {
    message.innerText = "Game was Draw. Play again.";
    message.style.backgroundColor = "#081b31";
  };

const showWinner =(userWin, userChoice ,compChoice)=>{
    if(userWin){
        userScore++
        userScore1.innerHTML =userScore;
        message.innerHTML =`You win ${userChoice} beats ${compChoice}`
        message.style.backgroundColor ="green"
        message.style.color ="white"


    }
    else {
        compScore++;
        compScore1.innerHTML =compScore
        message.innerHTML =`you lost ${compChoice} beats ${userChoice}`
        message.style.backgroundColor ="red"
        message.style.color ="white"
        
      }
}

const playGame =(userChoice)=>{
    const compChoice = genCompChoice();

    if (userChoice === compChoice) {
      //Draw Game
      drawGame();
    } else {
      let userWin = true;
      if (userChoice === "rock") {
        //scissors, paper
        userWin = compChoice === "paper" ? false : true;
      } else if (userChoice === "paper") {
        //rock, scissors
        userWin = compChoice === "scissors" ? false : true;
      } else {
        //rock, paper
        userWin = compChoice === "rock" ? false : true;
      }
      showWinner(userWin, userChoice, compChoice);
    }

}


select.forEach((select) => {  // Use 'select' as the individual element in the loop
    select.addEventListener("click", () => {  // Correct event listener string
        const userChoice = select.getAttribute("id");  // Fix inconsistent variable name
        playGame(userChoice);  // Call playGame with the user's choice
    });
});
