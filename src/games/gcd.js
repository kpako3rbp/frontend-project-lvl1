import readlineSync from 'readline-sync';
import _ from 'lodash';
import { getRandomNum } from '../helpers.js';

const gcdGame = () => {
  const randomNum1 = getRandomNum(0, 100);
  const randomNum2 = getRandomNum(0, 100);

  console.log(`Question: ${randomNum1} ${randomNum2}`);

  const getDivisorsArr = (num) => {
    const arr = [];

    for (let i = 1; i <= num / 2; i += 1) {
      if (num % i === 0) {
        arr.push(i);
      }
    }

    arr.push(num);
    return arr;
  };

  const divisorsArr = _.intersection(getDivisorsArr(randomNum1), getDivisorsArr(randomNum2));
  const result = divisorsArr[divisorsArr.length - 1];

  const answer = Number(readlineSync.question('Your answer: '));

  return [result, answer];
};

export default gcdGame;
