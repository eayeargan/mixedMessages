const {names, actions, subjects} = require('./wordBank.js');

const indexOne = Math.floor(Math.random() * 5);

const indexTwo = Math.floor(Math.random() * 5);

const indexThree = Math.floor(Math.random() * 5);

console.log(names[indexOne] + ' ' + actions[indexTwo] + ' ' + subjects[indexThree]);