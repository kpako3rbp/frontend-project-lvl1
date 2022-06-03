import readlineSync from 'readline-sync';

// Функция для рандомного числа
const getRandomNum = () => Math.round((Math.random() * 100));

// Проверка числа на четность
const isEven = number => (number % 2 === 0) ? 'yes' : 'no';    

// Количество раундов
const gameRounds = 3;

const evenGame = () => {
    // Приветствие 
    console.log('Welcome to the Brain Games!');

    // Запрос имени
    const userName = readlineSync.question('May I have your name? ');

    // Приветствие
    console.log(`Hello, ${userName}! \nAnswer "yes" if the number is even, otherwise answer "no".`);

    // Игра
    for (let i = 0; i < gameRounds; i += 1) {
        let randomNum = getRandomNum();
        console.log(`Question: ${randomNum}`); 
        let answer = readlineSync.question('Your answer: ');  
        if (isEven(randomNum) === answer) {
            console.log('Correct!'); 
        } else {
            console.log(`'${answer}' is wrong answer ;(. Correct answer was '${isEven(randomNum)}'.`);
            break;
        }             
    }
    console.log(`Congratulations, ${userName}!`);
}

export default evenGame;

 
  