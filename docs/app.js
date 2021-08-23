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

const removeGreenFlash = () => {
    green.classList.remove("flash");
}

const removeYellowFlash = () => {
    yellow.classList.remove("flash");
}

const removeBoxFlash = (box) => {
    box.classList.remove("flash");
}

computerChoices.push(randomNum(1,4));
computerChoices.push(randomNum(1,4));
computerChoices.push(randomNum(1,4));
console.log(computerChoices);


computerChoices.forEach((num, i) => {
    setTimeout(() => {
        console.log(num);
        if(num === 1){
            red.classList.add("flash");
            setTimeout(removeRedFlash, 1000);
        } else if(num === 2){
            blue.classList.add("flash");
            setTimeout(removeBlueFlash, 1000);
        }else if(num === 3){
            green.classList.add("flash");
            setTimeout(removeGreenFlash, 1000);
        }else if(num === 4){
            yellow.classList.add("flash");
            setTimeout(removeYellowFlash, 1000);
        }else {
            console.log("was changed/null" + num);
        }
    }, i * 2000);
});

const userSelect = (box) => {
    box.addEventListener('click', () => {
        box.classList.add ("flash");
        setTimeout(removeBoxFlash, 500, box);
    })
}

userSelect(red);
userSelect(blue);
userSelect(green);
userSelect(yellow);

/* sources:
random number -
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

class list info -
https://developer.mozilla.org/en-US/docs/Web/API/Element/classList

setTimeout - 
https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout

delay for each - 
https://travishorn.com/delaying-foreach-iterations-2ebd4b29ad30
*/

