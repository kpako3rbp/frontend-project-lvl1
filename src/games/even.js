import readlineSync from 'readline-sync';
import {
  getRandomNum, isEven,
} from '../helpers.js';

const evenGame = () => {
  const randomNum = getRandomNum(0, 100);
  const result = isEven(randomNum);

  console.log(`Question: ${randomNum}`);

  const answer = readlineSync.question('Your answer: ');

  return [result, answer];
};

export default evenGame;
