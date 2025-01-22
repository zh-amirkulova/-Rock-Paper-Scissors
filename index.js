console.log('hello world');

function getComputerChoice (min, max) {
  min = Math.ceil(min); // Округление вверх
  max = Math.floor(max); // Округление вниз
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// console.log(getComputerChoice (1, 3));

let result =  getComputerChoice (1, 3)

console.log(result)


if (result===1){
  console.log('rock');
} else if (result===2) {
  console.log('paper');
} else console.log('scissors');
