const computerChoiceDisplay = document.querySelector('#computer-choice');
const userChoiceDisplay = document.querySelector('#user-choice');
const resultDisplay = document.querySelector('#result');
const posssibleChoices = document.querySelectorAll('button');
let userChoice;
let computerChoice;
let result;

posssibleChoices.forEach(possibleChoice => {
    possibleChoice.addEventListener('click', (e) => {
        // console.log(e.target.id);  id değerini alıyoruz.
        userChoice = e.target.id;
        userChoiceDisplay.innerHTML = userChoice;

        generateComputerChoice();
        getResult();
    })
})

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * posssibleChoices.length) + 1 // veya 3 kullanabiliriz , aynı şey
    // console.log(randomNumber);
    if (randomNumber === 1) {
        computerChoice = 'rock';
    }
    if (randomNumber === 2) {
        computerChoice = 'paper';
    }
    if (randomNumber === 3) {
        computerChoice = 'scissors';
    }
    computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
    if (computerChoice === userChoice) {
        result = "İts a draw!";
        resultDisplay.style.color = "blue";
    }
    if (computerChoice === 'rock' && userChoice === 'paper') {
        result = "you win!";
        resultDisplay.style.color = "green";
    }
    if (computerChoice === 'rock' && userChoice === 'scissors') {
        result = "you lost!";
        resultDisplay.style.color = "red";

    }
    if (computerChoice === 'paper' && userChoice === 'scissors') {
        result = "you win!";
        resultDisplay.style.color = "green";

    }
    if (computerChoice === 'paper' && userChoice === 'rock') {
        result = "you lost!";
        resultDisplay.style.color = "red";

    }
    if (computerChoice === 'scissors' && userChoice === 'rock') {
        result = "you win!";
        resultDisplay.style.color = "green";

    }
    if (computerChoice === 'scissors' && userChoice === 'paper') {
        result = "you lost!";
        resultDisplay.style.color = "red";
    }
    resultDisplay.innerHTML = result;
}