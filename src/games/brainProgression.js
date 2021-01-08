import readlineSync from 'readline-sync';
import { getRandomNum, greetUser } from '../index.js';

function brainProgression(roundAmount) {
  const username = greetUser();
  console.log(`Hello, ${username}`);
  console.log('What number is missing in the progression?');
  for (let i = 1; i <= roundAmount; i += 1) {
    const progressionArr = [];
    const progressionSize = getRandomNum(5, 10);
    const progressionStep = getRandomNum(1, 5);
    progressionArr.push(getRandomNum(1, 99));
    // наполним массив числами с определённым выше шагом
    for (let j = 0; j <= progressionSize; j += 1) {
      const lastCharIndex = progressionArr.length - 1;
      const num = progressionArr[lastCharIndex] + progressionStep;
      progressionArr.push(num);
    }
    // выберем число которое будем запрашивать у пользователя
    const questionNumIndex = getRandomNum(0, progressionArr.length - 1);
    const questionNum = progressionArr[questionNumIndex];
    progressionArr[questionNumIndex] = '..';
    const answer = readlineSync.question(`*** Question: ${progressionArr.join(' ')} `);
    const userAnswer = Number(answer);
    const correctAnswer = questionNum;
    if (correctAnswer === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${username}!`);
      return;
    }
  }

  console.log(`Congratulations, ${username}`);
}

export default brainProgression;
