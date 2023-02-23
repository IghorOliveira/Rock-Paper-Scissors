//const userBtn = document.querySelector('.btn');
const compChoice = document.querySelector('#computer-choice');
const userChoice = document.querySelector('#your-choice');
let compHand;
const result = document.querySelector('#result');
let userHand;

const buttons = document.querySelectorAll('.btn');

/* document.querySelector('#choices').addEventListener('click', function(e){
    userHand = e.target.getAttribute('id');
    console.log(userHand);
    //0 = rock, 1 = paper, 2 = scissors
    compHand = Math.floor(Math.random() * 3);

    console.log(compHand);

    if(compHand === 0){
        compHand = 'rock';
    } else if (compHand === 1){
        compHand = 'paper';
    } else {
        compHand = 'scissors';
    }

    compChoice.textContent = compHand;
    userChoice.textContent = userHand;

    if(userHand === compHand){
        result.textContent = 'Draw';
    } else if(userHand === 'paper') {
        if(compHand === 'scissors'){
            result.textContent = 'Computer Wins';
        } else {
            result.textContent = 'Player Wins';
        }
    } else if(userHand === 'rock') {
        if(compHand === 'paper'){
            result.textContent = 'Computer Wins';
        } else {
            result.textContent = 'Player Wins';
        }
    } else {
        if(compHand == 'rock'){
            result.textContent = 'Computer Wins';
        } else {
            result.textContent = 'Player Wins';
        }
    }
    
}); */

buttons.forEach(button  => button.addEventListener('click', function(e){
    userHand = e.target.getAttribute('id');
    console.log(userHand);
    //0 = rock, 1 = paper, 2 = scissors
    compHand = Math.floor(Math.random() * buttons.length);

    console.log(compHand);

    if(compHand === 0){
        compHand = 'rock';
    } else if (compHand === 1){
        compHand = 'paper';
    } else {
        compHand = 'scissors';
    }

    compChoice.textContent = compHand;
    userChoice.textContent = userHand;

    if(userHand === compHand){
        result.textContent = 'Draw';
    } else if(userHand === 'paper') {
        if(compHand === 'scissors'){
            result.textContent = 'Computer Wins';
        } else {
            result.textContent = 'Player Wins';
        }
    } else if(userHand === 'rock') {
        if(compHand === 'paper'){
            result.textContent = 'Computer Wins';
        } else {
            result.textContent = 'Player Wins';
        }
    } else {
        if(compHand == 'rock'){
            result.textContent = 'Computer Wins';
        } else {
            result.textContent = 'Player Wins';
        }
    }
}));
