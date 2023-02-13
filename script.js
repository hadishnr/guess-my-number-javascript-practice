'use strict';
/*
document.querySelector('.message').textContent = 'Correct Number!';

document.querySelector('.score').textContent = 13;
document.querySelector('.number').textContent = 10;

document.querySelector('.guess').value = 20;
*/

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = 'No Number !';
  }
});
