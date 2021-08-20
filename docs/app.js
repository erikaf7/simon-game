let computerChoices = [];
const red = document.querySelector("#one");
const blue = document.querySelector("#two");
const green = document.querySelector("#three");
const yellow = document.querySelector("#four");

const randomNum = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1) + min);
}

const computerPattern = (choices) =>{
    for (i=0; i< choices.length; i++){
        if(choices[i] === 1){
            red.classList.add("flash");
        } else if(choices[i] === 2){
            blue.classList.add("flash");
        }else if(choices[i] === 3){
            green.classList.add("flash");
        }else if(choices[i] === 4){
            yellow.classList.add("flash");
        }else {
            console.log("was changed/null" + choices[i]);
        }
    }
}

computerChoices.push(randomNum(1,4));
computerChoices.push(randomNum(1,4));
computerChoices.push(randomNum(1,4));
console.log(computerChoices);
console.log(red);
console.log(computerPattern(computerChoices));
computerPattern(computerChoices);


/* source:
random number -
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

*/

