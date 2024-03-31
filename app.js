let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector('#msg');

const userScorePara = document.querySelector('#user-score');
const compScorePara = document.querySelector('#comp-score')

const genComputerChoice = () => {
  let options = ["rock", "paper", "scissors"];
  //rock paper scissors
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const drawGame = () => {
    // console.log("game was draw");
    msg.innerText = "Game was Draw. Play Again.";
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        // console.log("you win");
        msg.innerText = `You win. Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        // console.log('you lose!');
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lost! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
//   console.log("user choice", userChoice);
  //Generate computer choice
  const compChoice = genComputerChoice();
//   console.log("computer choice", compChoice);

  if (userChoice === compChoice) {
    drawGame();
  }else{
    let userWin = true;
    if (userChoice === 'rock') {
        //scissors, paper
        userWin = compChoice === 'paper' ? false : true;
    }else if(userChoice === 'paper'){
        //rock, scissors
        userWin = compChoice === 'scissors' ? false : true;
    }else{
        //rock, paper
        compChoice === 'rock' ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  // console.log(choice);
  choice.addEventListener("click", () => {
    //getting the div id
    const userChoice = choice.getAttribute("id");
    // console.log("choice was clicked", userChoice);
    playGame(userChoice);
  });
});
