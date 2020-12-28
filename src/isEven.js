import readlineSync from 'readline-sync';
import sayHey from '../src/cli.js';

console.log('Welcome to the Brain Games!');
const askUsername = '*** May I have your name, stranger? -> ';
const username = sayHey(askUsername);
console.log(`Well, hello, ${username}!`);

function isEven(list) {
    for (const num of list) {
        const userAnswer = readlineSync.question(`*** Question: ${num} -> `);
        const correctAnswer = (num % 2 === 0) ? 'yes' : 'no';
        const result = (userAnswer === correctAnswer) ? true : false;
        if (result) {
            console.log('correct');
        } else if (!result) {
            return `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.
      Let's try again, ${username}!`;
        }
    }
}

export default isEven;