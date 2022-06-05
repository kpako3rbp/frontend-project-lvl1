










import readlineSync from 'readline-sync';

// Функция для рандомного числа
const getRandomNum = (max) => Math.floor((Math.random() * max));

// Проверка числа на четность
const isEven = (number) => ((number % 2 === 0) ? 'yes' : 'no');

// Количество раундов
const gameRounds = 3;

const evenGame = () => {
  // Приветствие
  console.log('Welcome to the Brain Games!');

  // Запрос имени
  const userName = readlineSync.question('May I have your name? ');

  // Приветствие
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  // Игра
  for (let i = 0; i < gameRounds; i += 1) {
    const randomNum = getRandomNum(100);
    const result = isEven(randomNum);

    console.log(`Question: ${randomNum}`);

    const answer = readlineSync.question('Your answer: ');
    if (result === answer) {
      console.log('Correct!');
    } else {
      return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'. \nLet's try again, ${userName}!`);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};

export default evenGame;

