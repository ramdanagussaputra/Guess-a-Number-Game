'use strict';

/// Element
const message = document.querySelector('.message');
const guessNumber = document.querySelector('.number');
const scoreEl = document.querySelector('.score');
const highscoreEl = document.querySelector('.highscore');
const inputEl = document.querySelector('.guess');

/// Initial condition variable
let randomNum;
let scoreVal = 20;
let highscoreVal = 0;
let inputVal;

/// Initial condition function
// Random number generator
const randomGenerator = function () {
  randomNum = Math.floor(Math.random() * 20) + 1;
};
randomGenerator();

// Set Initial score
const initialScore = function (value) {
  scoreEl.textContent = value;
};

initialScore(scoreVal);

// Score Func
const wrongScore = function () {
  scoreVal--;
  scoreEl.textContent = scoreVal;
};

// Check button
document.querySelector('.check').addEventListener('click', function () {
  // User input
  inputVal = Number(document.querySelector('.guess').value);

  // Check user input
  if (!inputVal) {
    message.textContent = 'Input Valid Number';
  } else if (scoreVal > 1) {
    // Check the number
    if (inputVal === randomNum) {
      // set the highscore
      highscoreEl.textContent =
        highscoreVal < scoreVal ? scoreVal : highscoreVal;

      // Change background
      document.body.style.backgroundColor = '#60b347';
      guessNumber.style.width = '30rem';

      // show the correct number
      guessNumber.textContent = randomNum;

      // Reset input value
      inputEl.value = '';

      // Show win message
      message.textContent = 'You win..';
    } else {
      // Minus the score
      wrongScore();

      // Set the message
      inputVal > randomNum
        ? (message.textContent = 'Too High..')
        : (message.textContent = 'Too low..');
    }
  } else if (scoreVal === 1) {
    wrongScore();
    message.textContent = 'You lose..';
    guessNumber.textContent = randomNum;
  }
});

// Again button
document.querySelector('.again').addEventListener('click', function () {
  scoreVal = 20;
  randomGenerator();
  initialScore(scoreVal);
  guessNumber.textContent = '?';
  document.body.style.backgroundColor = '#222';
  guessNumber.style.width = '15rem';
  inputEl.value = '';
  message.textContent = 'Start guessing...';
});
