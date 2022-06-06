import readlineSync from 'readline-sync';
import { getRandomNum } from '../helpers.js';

const progressionGame = () => {
  const progressionLength = getRandomNum(5, 15);
  const firstNum = getRandomNum(0, 100);
  const difference = getRandomNum(0, 9);

  // Функция для случайной прогрессии
  const getProgression = (a, d, length) => {
    const result = [a];
    for (let i = 0; i < length - 1; i += 1) {
      result.push(a += d);
    }
    return result;
  };

  // Создание случайной прогрессии и получение случайного индекса
  const progression = getProgression(firstNum, difference, progressionLength);
  const randomIndex = getRandomNum(0, progression.length - 1);

  const result = progression[randomIndex];
  progression.splice(randomIndex, 1, '..');

  console.log(`Question: ${progression.join(' ')}`);

  const answer = Number(readlineSync.question('Your answer: '));

  return [result, answer];
};

export default progressionGame;
