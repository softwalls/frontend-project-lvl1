import readlineSync from 'readline-sync';

function isEven(list, username) {
  for (let i = 0; i < list.length; i += 1) {
    const userAnswer = readlineSync.question(`*** Question: ${list[i]} -> `);
    const correctAnswer = (list[i] % 2 === 0) ? 'yes' : 'no';
    if (userAnswer === correctAnswer) {
      console.log('correct');
    } else {
      return `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${username}!`;
    }
  }
  return `Congratulations, ${username}!`;
}

export default isEven;
