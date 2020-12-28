import readlineSync from 'readline-sync';

const sayHey = (question) => {
  const username = readlineSync.question(`${question}`);
  return (username);
}

export default sayHey;