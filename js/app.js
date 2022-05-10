'use strict';

let userResponse = prompt('What is your name?');
alert('Welcome ' + userResponse + '!');
// console.log(userResponse);

let answerOne = prompt('Do I know how to code?').toLowerCase();

if(answerOne === 'no' || answerOne === 'n'){
  alert('You are correct');
}else if(answerOne === 'yes' || answerOne === 'y'){
  alert('Sorry, I do not know how to code');
}
// console.log(answerOne);

let answerTwo = prompt('Do I want to learn how to code?').toLowerCase();

if(answerTwo === 'yes' || answerTwo === 'y'){
  alert('You are correct');
}else if(answerTwo === 'no' || answerTwo === 'n'){
  alert('Of course I do!');
}
// console.log(answerTwo);

let answerThree = prompt('Are you excited to be at Code Fellows?').toLowerCase();

if(answerThree === 'yes' || answerThree === 'y'){
  alert('You are correct');
}else if(answerThree === 'no' || answerThree === 'n'){
  alert('Code Fellows is the best!');
}
// console.log(answerThree);

let answerFour = prompt('Am I a fan of the Washington Nationals?').toLowerCase();

if(answerFour === 'no' || answerFour === 'n'){
  alert('You are correct I dont like baseball');
}else if(answerFour === 'yes' || answerFour === 'y'){
  alert('Sorry, I do not know how to code');
}
// console.log(answerFour);

let answerFive = prompt('Do I have a dog?').toLowerCase();

if(answerFive === 'no' || answerFive === 'n'){
  alert('You are correct');
}else if(answerFive === 'yes' || answerFive === 'y'){
  alert('I do not own a dog I am allergic');
}
// console.log(answerFive);

alert('Thanks for visiting my site ' + userResponse + '!');
