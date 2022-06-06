// Функция для рандомного числа
export const getRandomNum = (min, max) => Math.floor(Math.random() * (max - min) + min);

// Функция для случайной операции
export const getRandomOperator = (operators) => {
  const randomIndex = getRandomNum(0, operators.length);
  return operators[randomIndex];
};

// Функция для проверки четности
export const isEven = (number) => ((number % 2 === 0) ? 'yes' : 'no');

// Функция для проверки простоты числа
export const isPrime = (number) => {
  let result = 'yes';

  if (number <= 1) {
    result = 'no';
  }

  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      result = 'no';
      break;
    }
  }

  return result;
};
