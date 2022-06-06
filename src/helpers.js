// Функция для рандомного числа
/* export const getRandomNum = (max) => Math.floor((Math.random() * max)) + 1; */

export const getRandomNum = (min, max) => Math.floor(Math.random() * (max - min) + min);

// Функция для случайной операции
export const getRandomOperator = (operators) => {
  const randomIndex = getRandomNum(0, operators.length);
  return operators[randomIndex];
};