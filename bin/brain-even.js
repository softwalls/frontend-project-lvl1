#!/usr/bin/env node
import { getRandomList, greetUser } from '../src/index.js';
import isEven from '../src/games/isEven.js';

// сгенерим числа для раундов и запустим игру
const username = greetUser();
console.log(`Hello, ${username}`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');
const numList = getRandomList(3);
console.log(isEven(numList, username));
