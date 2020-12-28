import askName from './cli.js'
import isEven from './isEven.js';

const nameQuestion = 'May I have your name? ';
const helloword = 'Hello, ';

// пепяка спрашивающая имя и возвращающая username

const greetUser = () => {
  const greetingString = askName(nameQuestion);
  const from = 7;
  const lastChar = greetingString.length - 1;
  const name = greetingString.substring(from, lastChar);
  return name;
};

// пепяка для получения массива случайных чисел. Будем использовать их для подставления в игры.

const getRandomList = (amount, lim = 20) => {
  const result = [];
  for (let i = 0; i < amount; i += 1) {
    result.push(Math.floor(Math.random() * Math.floor(lim)));
  }
  return result;
};

export {
  nameQuestion,
  helloword,
  getRandomList,
  greetUser,
};
