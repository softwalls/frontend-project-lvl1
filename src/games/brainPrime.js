import readlineSync from 'readline-sync';
import { getRandomNum, greetUser } from '../index.js';

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

function brainPrime(roundAmount) {
  const username = greetUser();
  console.log(`Hello, ${username}`);
  console.log('What number is missing in the progression?');
  for (let i = 1; i <= roundAmount; i += 1) {
    const questionNum = getRandomNum(0, 99);
    const userAnswer = readlineSync.question(`*** Question: ${questionNum} `);
    console.log(`Your answer: ${userAnswer}`);
    const correctAnswer = isPrime(questionNum);
    if (correctAnswer === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${username}!`);
      return;
    }
  }
  console.log(`Congratulations, ${username}!`);
}

export default brainPrime;
