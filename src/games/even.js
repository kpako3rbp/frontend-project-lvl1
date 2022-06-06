import readlineSync from 'readline-sync';
import { getRandomNum } from '../helpers.js';


const evenGame = () => {
  const isEven = (number) => ((number % 2 === 0) ? 'yes' : 'no');  
  const randomNum = getRandomNum(0, 100);
  const result = isEven(randomNum);

  console.log(`Question: ${randomNum}`);  

  const answer = readlineSync.question('Your answer: '); 

  return [result, answer];
};


export default evenGame;