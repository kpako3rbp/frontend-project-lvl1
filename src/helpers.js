// Функция для рандомного числа
export const getRandomNum = (max) => Math.floor((Math.random() * max));

// Функция для случайной операции
export const getRandomOperator = (operators) => {
  const randomIndex = getRandomNum(operators.length);
  return operators[randomIndex];
};