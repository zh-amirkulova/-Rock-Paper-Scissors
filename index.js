let humanScore = 0;
let computerScore = 0;

playGame();

function playGame(){
    const buttons = document.querySelectorAll("button");

    buttons.forEach((button) => {
    button.addEventListener("click", () => {
    const humanSelection = button.id;
    console.log(humanSelection);
    const computerSelection  = getComputerChoice (1, 3);
    console.log(computerSelection);

    playRound(humanSelection, computerSelection);

    if (humanScore === 3 || computerScore === 3){ 
      console.log('Human score:',humanScore, 'Computer score:',computerScore) ; 
      return  alert('This round finished!');
    } 
    });
  });    
}

// get the computer choice
function getComputerChoice (min, max) {
    min = Math.ceil(min); 
    max = Math.floor(max); 
    const computerChoice = Math.floor(Math.random() * (max - min + 1)) + min;
    return computerChoice;

}

// the logic to play a single round
function playRound(humanChoice, computerChoice){
  if (humanChoice === "Rock" && computerChoice === 2 || humanChoice === "Paper" && computerChoice === 3|| 
      humanChoice === "Scissors" && computerChoice === 1
  ){
      return computerScore++;
  } else if (humanChoice === "Rock" && computerChoice === 3 || humanChoice === "Paper" && computerChoice === 1 ||
              humanChoice === "Scissors" && computerChoice === 2
  ){
      return humanScore++;
  } 
};
