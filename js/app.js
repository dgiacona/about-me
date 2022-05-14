'use strict';
let score = 0;
let userName = prompt('What is your name?');
alert('Welcome ' + userName + '!');


function q1() {
  let answerOne = prompt('Do I know how to code?').toLowerCase();

  if (answerOne === 'no' || answerOne === 'n') {
    alert('You are correct');
    score++;
  } else if (answerOne === 'yes' || answerOne === 'y') {
    alert('Sorry, I do not know how to code');
  }
}

q1();


function q2() {
  let answerTwo = prompt('Do I want to learn how to code?').toLowerCase();

  if (answerTwo === 'yes' || answerTwo === 'y') {
    alert('You are correct');
    score++;
  } else if (answerTwo === 'no' || answerTwo === 'n') {
    alert('Of course I do!');
  }
}

q2();


function q3() {
  let answerThree = prompt(
    'Are you excited to be at Code Fellows?'
  ).toLowerCase();

  if (answerThree === 'yes' || answerThree === 'y') {
    alert('You are correct');
    score++;
  } else if (answerThree === 'no' || answerThree === 'n') {
    alert('Code Fellows is the best!');
  }
}

q3();


function q4() {
  let answerFour = prompt(
    'Am I a fan of the Washington Nationals?'
  ).toLowerCase();

  if (answerFour === 'no' || answerFour === 'n') {
    alert('You are correct I dont like baseball');
    score++;
  } else if (answerFour === 'yes' || answerFour === 'y') {
    alert('Sorry, I do not like baseball');
  }
}

q4();



function q5() {
  let answerFive = prompt('Do I have a dog?').toLowerCase();

  if (answerFive === 'no' || answerFive === 'n') {
    alert('You are correct');
    score++;
  } else if (answerFive === 'yes' || answerFive === 'y') {
    alert('I do not own a dog I am allergic');
  }
}

q5();


let attempts = 4;
let userGuess = null;
let myNumber = 28;

function q6() {
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
}

q6();


function q7() {

  let food = ['italian ', 'mexican ', 'indian ', ' american'];

  for (let i = 0; i < 6; i++) {
    let foodChoice = prompt('Guess one of my favorite types of foods').toLowerCase();

    for (let m = 0; m < food.length; m++) {
      if (foodChoice === food[m]) {
        alert('I love that food!');
        score++;
        i = 6;
        break;
      }
    }
  }
  alert(`Here are my favorite types of food: ${food}`);
}

q7();


alert('Thanks for visiting my site ' + userName + '!' + ' You scored ' + score + ' points!');
