let randomNumber = parseInt(Math.random() * 100 + 1);

const userInput = document.querySelector("#guessField");
const submit = document.querySelector("#subt");

const guessSlot = document.querySelector(".guessess");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");
let prevGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuessess(guess);
  });
}

function validateGuessess(guess) {
  if (isNaN(guess)) {
    alert("Please Enter a valid Number");
  } else if (guess < 1) {
    alert("Please enter number Greater than 1.");
  } else if (guess > 100) {
    alert("Please enter number Smaller than 1.");
  } else {
    prevGuess.push(guess);
    if (numGuess >= 10) {
      displayGuess(guess);
      displayMessage(`Oops🤭Game over. Random Number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuessess(guess);
    }
  }
}
function checkGuessess(guess) {
  if (guess === randomNumber) {
    displayMessage(`WoW🥳, You guessed it right.`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOO Low😔`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is TOO Big😖`);
  }
}

function displayGuess(guess) {
  userInput.value = "";
  guessSlot.innerHTML += `${guess} `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  //
  const newGameButton = document.querySelector("#newGame");
  newGameButton.addEventListener("click", function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = "";
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute("disabled");
    startOver.removeChild(p);
    playGame = true;
  });
}
