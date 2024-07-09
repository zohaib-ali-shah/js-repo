let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('.guessField');
const remaining = document.querySelector('.lastResult');
const guessSlot = document.querySelector('.guesses');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

let p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Please enter a valid Number.');
  } else if (guess > 100) {
    alert('Please enter a number less then 100. ');
  } else if (guess < 1) {
    alert('Please enter a number more then 1.');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game over. Random guess nmber was ${randomNumber} `);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage('You gueesed it right. You Win.!');
    endGame();
  } else if (guess > randomNumber) {
    displayMessage('Entered too High Number.!');
  } else if (guess < randomNumber) {
    displayMessage('Entered too low number.!');
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}  `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
  startOver.appendChild(p);
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.innerHTML = `<h2 id= "newGame"> Start New Game</h2>`;
  playGame = false;
  newGame();
}

function newGame() {
  const newGame = document.querySelector('newGame');
  newGameButton.addEventListener('click', function (e) {
    let randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame();
  });
}
