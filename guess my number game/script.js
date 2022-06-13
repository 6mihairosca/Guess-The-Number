'use strict';

const againBtn = document.querySelector('.again');
const checkBtn = document.querySelector('.check');
let secretNumber = Math.trunc(Math.random() * 100 + 1);
let score = 20;
let highscore = 0;

checkBtn.addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  //When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No number!';
    //When player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎊 Correct Number!';

    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    //When guess is wrong
  } else if (guess != secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? '📈 Too high!' : '📉 Too Low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});

againBtn.addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 100 + 1);
  score = 20;

  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = ' ';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
});
