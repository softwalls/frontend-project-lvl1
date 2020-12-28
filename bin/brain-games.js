#!/usr/bin/env node
import sayHey from '../src/cli.js';

console.log('Welcome to the Brain Games!');
const askUsername = '*** May I have your name, stranger? -> ';
console.log(`*** Well, Hello, ${sayHey(askUsername)}`)

