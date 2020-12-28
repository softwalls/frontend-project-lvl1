import readlineSync from 'readline-sync';

const brainCalc = (numberList, username) => {
  const operations = ['+', '-', '*'];

  for (let i = 0; i < numberList.length; i += 2) {
    const randomIndex = Math.floor(Math.random() * Math.floor(3));
    const operand1 = numberList[i];
    const operand2 = numberList[i + 1];
    const operator = operations[randomIndex];
    const answer = readlineSync.question(`*** Question: ${operand1} ${operator} ${operand2} `);
    const userAnswer = Number(answer);
    let correctAnswer;
    switch (randomIndex) {
      case 0:
        correctAnswer = operand1 + operand2;
        break;
      case 1:
        correctAnswer = operand1 - operand2;
        break;
      default:
        correctAnswer = operand1 * operand2;
    }
    if (userAnswer === correctAnswer) {
      console.log('correct');
    } else {
      return `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${username}!`;
    }
  }
  return `Congratulations, ${username}!`;
};

export default brainCalc;
