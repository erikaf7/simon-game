const computerChoices = [];
const userChoices = [];
let userPoints = 0;
let pointsDisplayed = document.querySelector("body > div:nth-child(4) > p");
let gameStatus = document.querySelector("body > div:nth-child(7) > p");
const red = document.querySelector("#one");
const blue = document.querySelector("#two");
const green = document.querySelector("#three");
const yellow = document.querySelector("#four");

const userSelectRed = () => {  
    red.classList.add ("flash");
    userChoices.push(1);
    console.log(userChoices);
    setTimeout(removeBoxFlash, 400, red);
    checkChoices();
}

const userSelectBlue = () => {  
    blue.classList.add ("flash");
    userChoices.push(2);
    console.log(userChoices);
    setTimeout(removeBoxFlash, 400, blue);
    checkChoices();
} 

const userSelectGreen = () => {  
    green.classList.add ("flash");
    userChoices.push(3);
    console.log(userChoices);
    setTimeout(removeBoxFlash, 400, green);
    checkChoices();

}

const userSelectYellow = (box) => {  
    yellow.classList.add ("flash");
    userChoices.push(4);
    console.log(userChoices);
    setTimeout(removeBoxFlash, 400, yellow);
    checkChoices();

}

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
const changeStatus = () => {
    gameStatus.innerHTML = 'Watch the pattern and copy it.';
}
const showPattern = () => {
    red.removeEventListener('click', userSelectRed);
    blue.removeEventListener('click', userSelectBlue);
    green.removeEventListener('click', userSelectGreen);
    yellow.removeEventListener('click', userSelectYellow);
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
            }


        }, i * 2000

        );
        red.addEventListener('click', userSelectRed);
        blue.addEventListener('click', userSelectBlue);
        green.addEventListener('click', userSelectGreen);
        yellow.addEventListener('click', userSelectYellow);
    });

}

const checkChoices = () =>{
    let choicesArray = [];
    if(userChoices.length === computerChoices.length){
    for (let i = 0; i< computerChoices.length; i++){
        if(userChoices[i] === computerChoices[i]){
            choicesArray.push(computerChoices[i]);
        }else{
            console.log(computerChoices);
            console.log(userChoices);
        }
    }
    }
    if(choicesArray.length === computerChoices.length){
        gameStatus.innerHTML = "You got it!";
        userPoints ++;
        pointsDisplayed.innerHTML = (userPoints);
        setTimeout(changeStatus, 1500);
        computerChoices.push(randomNum(1,4));
        setTimeout(showPattern, 3000);
        userChoices.splice(0, userChoices.length);   
    }else if(userChoices.length === computerChoices.length){
        gameStatus.innerHTML = "That was wrong.";
        red.removeEventListener('click', userSelectRed);
        blue.removeEventListener('click', userSelectBlue);
        green.removeEventListener('click', userSelectGreen);
        yellow.removeEventListener('click', userSelectYellow);
    }
}

const gameStart = () => {
    gameReset();
    changeStatus();
    computerChoices.push(randomNum(1,4));
    setTimeout(showPattern, 1500);
    while(userChoices.length === computerChoices.length){
        checkChoices();
        console.log(computerChoices);

        userChoices.splice(0, userChoices.length);
    }

}

const gameReset = () => {
    computerChoices.splice(0, computerChoices.length);
    userChoices.splice(0, userChoices.length);
    userPoints = 0
    pointsDisplayed.innerHTML = (userPoints);
    console.log(computerChoices);
    console.log(userChoices);
    gameStatus.innerHTML = "Press START to play.";
}

document.querySelector("body > div.buttons > button:nth-child(1)").onclick = gameStart;
document.querySelector("body > div.buttons > button:nth-child(2)").onclick = gameReset;

/* sources:
random number -
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

class list info -
https://developer.mozilla.org/en-US/docs/Web/API/Element/classList

setTimeout - 
https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout

delay for each - 
https://travishorn.com/delaying-foreach-iterations-2ebd4b29ad30

remove event listener -
https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener

promises -
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises

*/

