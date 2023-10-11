'use strict';

const message = document.querySelector('.message');

const guessBtn = document.querySelector('.check');

let guess = document.querySelector('.guess').value;

let score = 20;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

let numberGuess = Math.floor(Math.random() * 20 + 1);

console.log(numberGuess);

guessBtn.addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // when player wins
  if (guess === numberGuess) {
    displayMessage('You Win! 🏆');
    document.querySelector('.number').textContent = numberGuess;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = numberGuess;

    if (score > Number(document.querySelector('.highscore').textContent)) {
      document.querySelector('.highscore').textContent = score;
    }
  } else if (guess !== numberGuess) {
    if (score > 0) {
      // document.querySelector('.message').textContent =
      // guess > numberGuess
      //   ? 'not quite try again!  guess too high! '
      //   : 'not quite guess to low!';

      displayMessage(
        guess > numberGuess
          ? 'not quite try again!  guess too high! '
          : 'not quite guess to low!'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('you lost what a friggin loser!😭');
    }
  }
  // guess is too high
  // } else if (guess != numberGuess && guess && guess > numberGuess) {
  //   // guess is too low
  //   document.querySelector('.score').textContent = score;
  // } else if (guess != numberGuess && guess && guess < numberGuess) {
  //   if (score > 0) {
  //     document.querySelector('.message').textContent =
  //       'not quite try again!  guess too low! ';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent =
  //       'hahaha score is 0 your such a loser!';
  //   }
  // }
  // no guess
  if (!guess) {
    // document.querySelector('.message').textContent = 'No Number ⛔';
    displayMessage('No Number ⛔');
    if (score < 1) {
      displayMessage('you lost what a friggin loser!😱');
    }
  }
});

//resets game keeps highscore
let resetBtn = document.querySelector('.again');

resetBtn.addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = '#333';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = '20';
  document.querySelector('.message').textContent = 'Start Guessing...';
  score = 20;
  numberGuess = Math.floor(Math.random() * 20 + 1);
  console.log(numberGuess);
});
