#!/usr/bin/env node
import { getRandomList, greetUser } from '../src/index.js';
import brainCalc from '../src/games/braincalc.js';

//   познакомимся, сгенерим
const username = greetUser();
console.log(`Hello, ${username}`);
// сгенерим числа для раундов
const numList = getRandomList(6);
// зададим вопрос и запустим игру
console.log('What is the result of the expression?');
console.log(brainCalc(numList, username));
