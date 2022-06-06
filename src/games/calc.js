import readlineSync from 'readline-sync';
import {
    getRandomNum, getRandomOperator,
} from '../helpers.js';


const calcGame = () => {    
    const randomNum1 = getRandomNum(0, 100);
    const randomNum2 = getRandomNum(0, 100);
    const randomOperator = getRandomOperator(['+', '-', '*']);
    let result;

    switch (randomOperator) {
        case '+':
        result = randomNum1 + randomNum2;
        console.log(`Question: ${randomNum1} + ${randomNum2}`);
        break;
        case '-':
        result = randomNum1 - randomNum2;
        console.log(`Question: ${randomNum1} - ${randomNum2}`);
        break;
        case '*':
        result = randomNum1 * randomNum2;
        console.log(`Question: ${randomNum1} * ${randomNum2}`);
        break;
        default:
        result = 'Something went wrong';
        break;
    }

    const answer = Number(readlineSync.question('Your answer: '));

    return [result, answer];
};

export default calcGame;
