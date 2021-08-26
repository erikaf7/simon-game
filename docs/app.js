const computerChoices = [];
const userChoices = [];
let userPoints = 0;
let soundOn = true;
let gameRunning = false;
let pointsDisplayed = document.querySelector("body > div:nth-child(5) > p:nth-child(2) > span");
let highScoreDisplay = document.querySelector("body > div:nth-child(5) > p:nth-child(3) > span");
let gameStatus = document.querySelector("body > div:nth-child(4) > p");
const red = document.querySelector("#one");
const blue = document.querySelector("#two");
const green = document.querySelector("#three");
const yellow = document.querySelector("#four");
const volume = document.querySelector("body > div.buttons > button:nth-child(3)");

localStorage.setItem('score', 0);
const setHighScore = () => {
    highScoreDisplay.innerHTML = localStorage.getItem('score');
}

const correctSound = () => {
    if(soundOn === true){
        let audio = new Audio("correct.mp3");
        audio.play();
    }
}

const incorrectSound = () => {
    if(soundOn === true){
        let audio = new Audio("incorrect.mp3");
        audio.play();
    }

}

const winSound = () => {
    if(soundOn === true){
        let audio = new Audio("win.mp3");
        audio.play();
    }

}

const redSound = () => {
    if(soundOn === true){
        let audio = new Audio("box1.mp3");
        audio.play();
    }
}
const blueSound = () => {
    if(soundOn === true){
        let audio = new Audio("box2.mp3");
        audio.play();
    }
}
const greenSound = () => {
    if(soundOn === true){
        let audio = new Audio("box3.mp3");
        audio.play();
    }
}
const yellowSound = () => {
    if(soundOn === true){
        let audio = new Audio("box4.mp3");
        audio.play();
    }
}

const userSelectRed = () => {  
    red.classList.add ("flash");
    userChoices.push(1);
    redSound();
    setTimeout(removeBoxFlash, 400, red);
    checkChoices();
}

const userSelectBlue = () => {  
    blue.classList.add ("flash");
    userChoices.push(2);
    blueSound();
    setTimeout(removeBoxFlash, 400, blue);
    checkChoices();
} 

const userSelectGreen = () => {  
    green.classList.add ("flash");
    userChoices.push(3);
    greenSound();
    setTimeout(removeBoxFlash, 400, green);
    checkChoices();

}

const userSelectYellow = (box) => {  
    yellow.classList.add ("flash");
    userChoices.push(4);
    yellowSound();
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
    if(gameRunning === true){
        gameStatus.innerHTML = 'Your turn.';
    }

}


const clickEnabled = () => {
    if(gameRunning === true){
        red.addEventListener('click', userSelectRed);
        blue.addEventListener('click', userSelectBlue);
        green.addEventListener('click', userSelectGreen);
        yellow.addEventListener('click', userSelectYellow);
    }

}

const showPattern = () => {
    red.removeEventListener('click', userSelectRed);
    blue.removeEventListener('click', userSelectBlue);
    green.removeEventListener('click', userSelectGreen);
    yellow.removeEventListener('click', userSelectYellow);
        computerChoices.forEach((num, i) => {
            setTimeout(() => {
                if(num === 1 && gameRunning === true){
                    red.classList.add("flash");
                    redSound();
                    setTimeout(removeRedFlash, 500);
                } else if(num === 2 && gameRunning === true){
                    blue.classList.add("flash");
                    blueSound();
                    setTimeout(removeBlueFlash, 500);
                }else if(num === 3 && gameRunning === true){
                    green.classList.add("flash");
                    greenSound();
                    setTimeout(removeGreenFlash, 500);
                }else if(num === 4 && gameRunning === true){
                    yellow.classList.add("flash");
                    yellowSound();
                    setTimeout(removeYellowFlash, 500);
                }
    
            }, i * 1000
    
            );
            let time = computerChoices.length * 1000;
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
            if (userPoints < localStorage.getItem('score', userPoints)){
                gameStatus.innerHTML = "That was the wrong pattern, game over. Press START to try again.";
                setTimeout(incorrectSound, 500);
                red.removeEventListener('click', userSelectRed);
                blue.removeEventListener('click', userSelectBlue);
                green.removeEventListener('click', userSelectGreen);
                yellow.removeEventListener('click', userSelectYellow);
            } else if(userPoints >= localStorage.getItem('score', userPoints)){
                if(userPoints === 1){
                    gameStatus.innerHTML = `That was the wrong pattern, game over. Congratulations, you won with ${localStorage.getItem('score', userPoints)} point!!`
                    setTimeout(winSound, 500);
                    red.removeEventListener('click', userSelectRed);
                    blue.removeEventListener('click', userSelectBlue);
                    green.removeEventListener('click', userSelectGreen);
                    yellow.removeEventListener('click', userSelectYellow);
                }else {
                    gameStatus.innerHTML = `That was the wrong pattern, game over. Congratulations, you won with ${localStorage.getItem('score', userPoints)} points!!`
                    setTimeout(winSound, 500);
                    red.removeEventListener('click', userSelectRed);
                    blue.removeEventListener('click', userSelectBlue);
                    green.removeEventListener('click', userSelectGreen);
                    yellow.removeEventListener('click', userSelectYellow);
                }

            }

        }
    }
    }
    if(choicesArray.length === computerChoices.length){
        gameStatus.innerHTML = "You got it!";
        setTimeout(correctSound, 500);
        red.removeEventListener('click', userSelectRed);
        blue.removeEventListener('click', userSelectBlue);
        green.removeEventListener('click', userSelectGreen);
        yellow.removeEventListener('click', userSelectYellow);
        userPoints ++;
        if(userPoints> localStorage.getItem('score', userPoints)){
            localStorage.setItem('score', userPoints);
            setHighScore();
        }
        pointsDisplayed.innerHTML = (userPoints);
        setTimeout(changeStatus, 1500);
        computerChoices.push(randomNum(1,4));
        setTimeout(showPattern, 3000);
        userChoices.splice(0, userChoices.length);   
    }else if(userChoices.length === computerChoices.length){
        if (userPoints < localStorage.getItem('score', userPoints)){
            gameStatus.innerHTML = "That was wrong, game over. Press START to try again.";
            setTimeout(incorrectSound, 500);
            red.removeEventListener('click', userSelectRed);
            blue.removeEventListener('click', userSelectBlue);
            green.removeEventListener('click', userSelectGreen);
            yellow.removeEventListener('click', userSelectYellow);
        }else if(userPoints >= localStorage.getItem('score', userPoints)){
            if(userPoints === 1){
                gameStatus.innerHTML = `That was the wrong pattern, game over. Congratulations, you won with ${localStorage.getItem('score', userPoints)} point!!`;
                setTimeout(winSound, 500);
                red.removeEventListener('click', userSelectRed);
                blue.removeEventListener('click', userSelectBlue);
                green.removeEventListener('click', userSelectGreen);
                yellow.removeEventListener('click', userSelectYellow);
            }else {
                gameStatus.innerHTML = `That was the wrong pattern, game over. Congratulations, you won with ${localStorage.getItem('score', userPoints)} points!!`;
                setTimeout(winSound, 500);
                red.removeEventListener('click', userSelectRed);
                blue.removeEventListener('click', userSelectBlue);
                green.removeEventListener('click', userSelectGreen);
                yellow.removeEventListener('click', userSelectYellow);
            }
        }
    }
}

const gameStart = () => {
    gameReset();
    gameRunning = true;
    changeStatus();
    computerChoices.push(randomNum(1,4));
    setTimeout(showPattern, 1000);
    while(userChoices.length === computerChoices.length){
        checkChoices();
        userChoices.splice(0, userChoices.length);
    }
}

const gameReset = () => {
    gameRunning = false;
    computerChoices.splice(0, computerChoices.length);
    userChoices.splice(0, userChoices.length);
    userPoints = 0
    pointsDisplayed.innerHTML = (userPoints);
    gameStatus.innerHTML = "Press START to play.";
    
}

const volumeMute = () => {
    volume.classList.toggle("mute");
    if(volume.classList.contains("mute")){
        soundOn = false;
        volume.innerHTML = "VOLUME ON";
    } else{
        soundOn = true;
        volume.innerHTML = "VOLUME OFF";
    }
}


setHighScore();
console.log(localStorage.getItem('score'));
volume.onclick = volumeMute;
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

client side storage-
https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Client-side_storage
*/

