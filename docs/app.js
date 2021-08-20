const randomNum = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1) + min);
}

let computerChoice = [];
computerChoice.push(randomNum(1,4));
computerChoice.push(randomNum(1,4));
computerChoice.push(randomNum(1,4));
console.log(computerChoice);


/* source:
random number -
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

*/