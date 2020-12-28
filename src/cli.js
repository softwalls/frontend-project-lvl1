import readlineSync from 'readline-sync';

function sayHey(question) {
  const username = readlineSync.question(`${question}`);
  return (username);
}

export default sayHey;
