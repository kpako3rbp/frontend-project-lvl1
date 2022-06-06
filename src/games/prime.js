import readlineSync from 'readline-sync';
import {
  getRandomNum, isPrime,
} from '../helpers.js';

const primeGame = () => {
  const randomNum = getRandomNum(0, 100);
  const result = isPrime(randomNum);

  console.log(`Question: ${randomNum}`);

  const answer = readlineSync.question('Your answer: ');

  return [result, answer];
};

export default primeGame;
