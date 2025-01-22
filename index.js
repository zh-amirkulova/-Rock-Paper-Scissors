// get the computer choice

// function getComputerChoice (min, max) {
//   min = Math.ceil(min); 
//   max = Math.floor(max); 
//   return Math.floor(Math.random() * (max - min + 1)) + min
  
// }

// const result =  getComputerChoice (1, 3)

// if (result===1){
//   console.log('Computer: rock');
// } else if (result===2) {
//   console.log('Computer: paper');
// } else console.log('Computer: scissors');


// get the human choice

// const num = prompt('To play, enter the number (1="rock", 2="paper", 3="scissors"): ');
// const parsedNumber = Number(num);

// function getHumanChoice(parsedNumber){
//     if (parsedNumber===1){
//     console.log('You: rock');
//   } else if (parsedNumber===2) {
//     console.log('You: paper');
//   } else if  (parsedNumber===3){
//     console.log('You: scissors');
//   } else console.log('You entered the wrong value!');
// }

// getHumanChoice(parsedNumber);


// // the players score variables
// let humanScore = 0;
// let computerScore = 0;

// // the logic to play a single round
// function playRound(humanChoice, computerChoice){
//   if (humanChoice === 1 && computerChoice === 2 || humanChoice === 2 && computerChoice === 3 || 
//       humanChoice === 3 && computerChoice === 1
//   ){
//     console.log("You lose!")
//     return computerScore++;
//   } else if (humanChoice === 1 && computerChoice === 3 || humanChoice === 2 && computerChoice === 1 ||
//              humanChoice === 3 && computerChoice === 2
//    ){
//     console.log("You  won!")
//     return humanScorу++;
//   } else console.log("Draw!")
//   return;
  
// };

// const humanSelection  = parsedNumber;
// const computerSelection  = result;

// playRound(humanSelection, computerSelection);


function playGame(){
  for (let i=0; i<5; i++){

    function getComputerChoice (min, max) {
      min = Math.ceil(min); 
      max = Math.floor(max); 
      return Math.floor(Math.random() * (max - min + 1)) + min
      
    }
    
    const result =  getComputerChoice (1, 3)
    
    if (result===1){
      console.log('Computer: rock');
    } else if (result===2) {
      console.log('Computer: paper');
    } else console.log('Computer: scissors');

    const num = prompt('To play, enter the number (1="rock", 2="paper", 3="scissors"): ');
    const parsedNumber = Number(num);

    function getHumanChoice(parsedNumber){
        if (parsedNumber===1){
        console.log('You: rock');
      } else if (parsedNumber===2) {
        console.log('You: paper');
      } else if  (parsedNumber===3){
        console.log('You: scissors');
      } else alert('You entered the wrong value!');
    }
    // the players score variables
    let humanScore = 0;
    let computerScore = 0;

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
        alert("You won this round!");
        return humanScore++;
      } else alert("Drow this round!");
      return;
      
    };
    const humanSelection  = parsedNumber;
    const computerSelection  = result;

    getHumanChoice(parsedNumber);
    playRound(humanSelection, computerSelection);
    console.log(humanScore,computerScore);
  };
};

playGame(); 