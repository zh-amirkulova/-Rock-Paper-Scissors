//get the computer choice

function getComputerChoice (min, max) {
  min = Math.ceil(min); 
  max = Math.floor(max); 
  return Math.floor(Math.random() * (max - min + 1)) + min;
  
}

let result =  getComputerChoice (1, 3)

if (result===1){
  console.log('rock');
} else if (result===2) {
  console.log('paper');
} else console.log('scissors');


// get the human choice

const num = prompt('To play, enter the number (1="rock", 2="paper", 3="scissors"): ');
const parsedNumber = Number(num);

function getHumanChoice(parsedNumber){
    if (parsedNumber===1){
    console.log('rock');
  } else if (parsedNumber===2) {
    console.log('paper');
  } else if  (parsedNumber===3){
    console.log('scissors');
  } else console.log('You entered the wrong value!');
}

getHumanChoice(parsedNumber);


  