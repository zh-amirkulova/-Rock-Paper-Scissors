let humanScore = 0;
let computerScore = 0;

playGame()

function playGame(){
  for (let i=0; i<5; i++){
      const humanSelection  = getHumanChoice();
      const computerSelection  = getComputerChoice (1, 3);

      playRound(humanSelection, computerSelection);
      console.log('Human score:',humanScore, 'Computer score:',computerScore);
  }

  if (humanScore>computerScore){
    alert('You are the winner!');
    console.log('Human is the winnner!');
  } else if (humanScore<computerScore){
    alert('You lost!');
    console.log('Computer is the winnner!');
  } else if(humanScore===computerScore){
    alert('Draw!');
    console.log('Was drow!');
  }
};

// get the computer choice
function getComputerChoice (min, max) {
min = Math.ceil(min); 
max = Math.floor(max); 
return Math.floor(Math.random() * (max - min + 1)) + min;
}


// get the human choice
function getHumanChoice(){
  const num = prompt('To play, enter the number (1="rock", 2="paper", 3="scissors"): ');
  const parsedNumber = Number(num);
  return parsedNumber;
};

// the logic to play a single round
function playRound(humanChoice, computerChoice){
  if (humanChoice === 1 && computerChoice === 2 || humanChoice === 2 && computerChoice === 3 || 
      humanChoice === 3 && computerChoice === 1
  ){
      alert("You lose this round!");
      return computerScore++;
  } else if (humanChoice === 1 && computerChoice === 3 || humanChoice === 2 && computerChoice === 1 ||
              humanChoice === 3 && computerChoice === 2
  ){
      alert("You  won this round!");
      return humanScore++;
  } else alert("Draw this round!")
  return;

};
