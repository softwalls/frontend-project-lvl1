import readlineSync from 'readline-sync';
import sayHey from './cli.js';

console.log('Welcome to the Brain Games!');
const askUsername = '*** May I have your name, stranger? -> ';
const username = sayHey(askUsername);
console.log(`Well, hello, ${username}!`);

function isEven(list) {
  for (let i = 0; i < list.length; i += 1) {
    const userAnswer = readlineSync.question(`*** Question: ${list[i]} -> `);
    const correctAnswer = (list[i] % 2 === 0) ? 'yes' : 'no';
    if (userAnswer === correctAnswer) {
      console.log('correct');
    } else {
      return `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.
      Let's try again, ${username}!`;
    }
  }
  return `Congratulations, ${username}!`;
}

export default isEven;
