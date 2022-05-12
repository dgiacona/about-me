'use strict';
let score = 0;
let userName = prompt('What is your name?');
alert('Welcome ' + userName + '!');
// console.log(userName);

let answerOne = prompt('Do I know how to code?').toLowerCase();

if (answerOne === 'no' || answerOne === 'n') {
  alert('You are correct');
  score++;
} else if (answerOne === 'yes' || answerOne === 'y') {
  alert('Sorry, I do not know how to code');
}
// console.log(answerOne);

let answerTwo = prompt('Do I want to learn how to code?').toLowerCase();

if (answerTwo === 'yes' || answerTwo === 'y') {
  alert('You are correct');
  score++;
} else if (answerTwo === 'no' || answerTwo === 'n') {
  alert('Of course I do!');
}
// console.log(answerTwo);

let answerThree = prompt(
  'Are you excited to be at Code Fellows?'
).toLowerCase();

if (answerThree === 'yes' || answerThree === 'y') {
  alert('You are correct');
  score++;
} else if (answerThree === 'no' || answerThree === 'n') {
  alert('Code Fellows is the best!');
}
// console.log(answerThree);

let answerFour = prompt(
  'Am I a fan of the Washington Nationals?'
).toLowerCase();

if (answerFour === 'no' || answerFour === 'n') {
  alert('You are correct I dont like baseball');
  score++;
} else if (answerFour === 'yes' || answerFour === 'y') {
  alert('Sorry, I do not know how to code');
}
// console.log(answerFour);

let answerFive = prompt('Do I have a dog?').toLowerCase();

if (answerFive === 'no' || answerFive === 'n') {
  alert('You are correct');
  score++;
} else if (answerFive === 'yes' || answerFive === 'y') {
  alert('I do not own a dog I am allergic');
}
console.log(answerFive);

let attempts = 4;
let userGuess = null;
let myNumber = 28;

while (userGuess !== myNumber) {
  if (attempts === 0) {
    alert('My age is actually 28 you are out of turns');
    break;
  }

  userGuess = parseInt(prompt('How old am I?'));
  if (userGuess < myNumber) {
    alert('I am not that young ' + userName + ', try again');
  } else if (userGuess > myNumber) {
    alert('I am not that old ' + userName + ', try again');
  } else if (userGuess === myNumber) {
    alert('You are right that is my age, ' + userName + '!');
    score++;
    break;
  }
  attempts = (attempts - 1);
}

let food;
food = ['italian', 'mexican', 'indian', 'american'];
let foodChoice = null;
let newAttempts= 6;

while (foodChoice !== food[0] || foodChoice !== food[1] || foodChoice !== food[2] || foodChoice !== food[3]) {
  if (newAttempts === 0) {
    alert('My favorite foods are ' `${food[0]}`, `${food[1]}, `, `${food[2]}, and `, `${food[3]}`);
    break;
  }
  foodChoice = prompt('What are your favorite foods?').toLowerCase();
  if (foodChoice === food[0]) {
    alert('I do love ' + food[0]);
    score++;
  } else if (foodChoice === food[1]) {
    alert('I do love ' + food[1]);
    score++;
  } else if (foodChoice === food[2]) {
    alert('I do love ' + food[2]);
    score++;
  } else if (foodChoice === food[3]) {
    alert('I do love ' + food[3]);
    score++;
  } else {
    alert('I do not like ' + foodChoice + '.');
  }
  newAttempts = (newAttempts - 1);
}

alert('Thanks for visiting my site ' + userName + '!' + ' You scored ' + score + ' points!');

