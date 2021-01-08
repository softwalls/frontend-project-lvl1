import askName from './cli.js';

const nameQuestion = 'May I have your name? ';
const helloword = 'Hello, ';
// количество раундов в играх
const roundSteps = 3;

// пепяка говорит что user ошибся

const wrongMessage = (userAnswer, correctAnswer) => {
  const result = `${userAnswer} is wrong answer ;( Correct answer was ${correctAnswer})`;
  return result;
};
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

// пепяка для получения cлучайного числа.

const getRandomNum = (min, max) => {
  // случайное число от min до (max+1)
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

// экспорты

export {
  nameQuestion,
  helloword,
  roundSteps,
  wrongMessage,
  getRandomList,
  greetUser,
  getRandomNum,
};

/*
======================================================================
                       ОБЩАЯ ЛОГИКА
======================================================================
- отображаем строку Welcome to the Brain Games { greetUser from index }
- Cпрашиваем имя и сохраняем его в username { greetUser from index }
- Выводим строку 'Hello, {username}!' { greetUser from index }

- отображаем строку с заданием; LOCAL MODULE

- генерим нужные исходные данные (случайные наборы чисел для
  подстановки в вычисления) { getRandom from index } LOCAL MODULE

- задаём вопрос и получаем ответ с помощью readlineSync.question() LOCAL MODULE

- обрабатываем ввод (сравниваем результаты пользователя и функции) LOCAL MODULE

- проверяем результат - выдаём нужный ответ (congratulations, wrong) или
  повторяем раунд с новыми исходными данными.
*/
