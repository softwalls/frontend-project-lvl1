import readlineSync from 'readline-sync';

function askName(question) {
  const username = readlineSync.question(`${question}`);
  return (`Hello, ${username}!`);
}

export default askName;
