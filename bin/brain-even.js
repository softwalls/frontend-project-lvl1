#!/usr/bin/env node
import sayHey from '../src/cli.js';
import isEven from '../src/isEven.js';

console.log('Answer "yes" if the number is even, otherwise answer "no".');
console.log(isEven([15, 6, 7]));
