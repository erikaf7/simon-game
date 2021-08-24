const computerChoices = [];
const userChoices = [];
let userPoints = 0;
let pointsDisplayed = document.querySelector("body > div:nth-child(5) > p");
let gameStatus = document.querySelector("body > div:nth-child(4) > p");
const red = document.querySelector("#one");
const blue = document.querySelector("#two");
const green = document.querySelector("#three");
const yellow = document.querySelector("#four");

const userSelectRed = () => {  
    red.classList.add ("flash");
    userChoices.push(1);
    setTimeout(removeBoxFlash, 400, red);
    checkChoices();
}

const userSelectBlue = () => {  
    blue.classList.add ("flash");
    userChoices.push(2);
    setTimeout(removeBoxFlash, 400, blue);
    checkChoices();
} 

const userSelectGreen = () => {  
    green.classList.add ("flash");
    userChoices.push(3);
    setTimeout(removeBoxFlash, 400, green);
    checkChoices();

}

const userSelectYellow = (box) => {  
    yellow.classList.add ("flash");
    userChoices.push(4);
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
    gameStatus.innerHTML = 'Watch the pattern and copy it...';
}

const changeStatusReady = () => {
    gameStatus.innerHTML = 'Your turn.';
}

const correctSound = () => {
    let audio = new Audio("correct.mp3")
    audio.play()
}

const clickEnabled = () => {
    red.addEventListener('click', userSelectRed);
    blue.addEventListener('click', userSelectBlue);
    green.addEventListener('click', userSelectGreen);
    yellow.addEventListener('click', userSelectYellow);
}

const showPattern = () => {
    red.removeEventListener('click', userSelectRed);
    blue.removeEventListener('click', userSelectBlue);
    green.removeEventListener('click', userSelectGreen);
    yellow.removeEventListener('click', userSelectYellow);
    computerChoices.forEach((num, i) => {
        setTimeout(() => {
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
        let time = computerChoices.length * 2000;
        setTimeout(clickEnabled, time);
        setTimeout(changeStatusReady, time);
    });

}

const checkChoices = () =>{
    let choicesArray = [];
    if(userChoices.length === computerChoices.length){
    for (let i = 0; i< computerChoices.length; i++){
        if(userChoices[i] === computerChoices[i]){
            choicesArray.push(computerChoices[i]);
        }else if(userChoices.length > computerChoices){
            gameStatus.innerHTML = "That was wrong, game over!";
            red.removeEventListener('click', userSelectRed);
            blue.removeEventListener('click', userSelectBlue);
            green.removeEventListener('click', userSelectGreen);
            yellow.removeEventListener('click', userSelectYellow);
        }
    }
    }
    if(choicesArray.length === computerChoices.length){
        gameStatus.innerHTML = "You got it!";
        correctSound();
        red.removeEventListener('click', userSelectRed);
        blue.removeEventListener('click', userSelectBlue);
        green.removeEventListener('click', userSelectGreen);
        yellow.removeEventListener('click', userSelectYellow);
        userPoints ++;
        pointsDisplayed.innerHTML = (userPoints);
        setTimeout(changeStatus, 1500);
        computerChoices.push(randomNum(1,4));
        setTimeout(showPattern, 3000);
        userChoices.splice(0, userChoices.length);   
    }else if(userChoices.length === computerChoices.length){
        gameStatus.innerHTML = "That was wrong, game over!";
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
        userChoices.splice(0, userChoices.length);
    }
}

const gameReset = () => {
    computerChoices.splice(0, computerChoices.length);
    userChoices.splice(0, userChoices.length);
    userPoints = 0
    pointsDisplayed.innerHTML = (userPoints);
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

adding sound - 
https://stackoverflow.com/questions/51572489/playing-sound-on-click-event-with-pure-javascript/51572658
*/

