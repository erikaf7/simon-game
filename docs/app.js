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

const removeRedFlash = () => {
        red.classList.remove("flash");
}

const removeBlueFlash = () => {
    blue.classList.remove("flash");
}

const computerPattern = (choices) =>{

    for (i=0; i< choices.length; i++){
        wait3();
        if(choices[i] === 1){
            red.classList.add("flash");
            setTimeout(removeRedFlash, 3000);
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

computerChoices.forEach((num, i) => {
    setTimeout(() => {
        console.log(num);
    }, i* 1000);
});
computerPattern(computerChoices);


/* source:
random number -
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

class list info -
https://developer.mozilla.org/en-US/docs/Web/API/Element/classList

setTimeout - 
https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout

delay for each - 
https://travishorn.com/delaying-foreach-iterations-2ebd4b29ad30
*/

