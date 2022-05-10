'use strict';

console.log('hey world');

let answerOne = prompt('Do I have a son?').toLocaleLowerCase;

if(answerOne === 'yes' || answerOne === 'y'){
  alert('You are correct');
}else if(answerOne === 'no' || answerOne === 'n'){
  alert('Sorry I do, She is crazy');
}
