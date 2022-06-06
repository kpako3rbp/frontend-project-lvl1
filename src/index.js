import readlineSync from 'readline-sync';

const gameTemplate = (rules, game) => {
  const gameRounds = 3;

  // Приветствие и запрос имени
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log(rules);

  for (let i = 0; i < gameRounds; i += 1) {
    const [result, answer] = game();

    if (result === answer) {
      console.log('Correct!');
    } else {
      return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'. \nLet's try again, ${userName}!`);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};

export default gameTemplate;
