import readlineSync from 'readline-sync';
import { getRandomNum, greetUser } from '../index.js';

const findGCD = (roundAmount) => {
  const username = greetUser();
  console.log(`Hello, ${username}`);
  console.log('Find the greatest common divisor of given numbers.');
  for (let i = 1; i <= roundAmount; i += 1) {
    let value1 = getRandomNum(1, 50);
    let value2 = getRandomNum(1, 50);
    const answer = readlineSync.question(`*** Question: ${value1} ${value2} `);
    const userAnswer = Number(answer);
    console.log(`Your answer: ${userAnswer}`);
    // Здесь реализован Эвклидов алгоритм
    while (value1 !== 0 && value2 !== 0) {
      if (value1 > value2) {
        value1 %= value2;
      } else {
        value2 %= value1;
      }
    }
    const correctAnswer = value1 + value2;
    if (correctAnswer === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${username}!`);
      return;
    }
  }
  console.log(`Congratulations, ${username}!`);
};

export default findGCD;
