import readlineSync from 'readline-sync';

const maxRoundsCount = 3;

const startGame = (description, makeMove) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(description);
  const iter = (roundNumber = 0) => {
    if (roundNumber === maxRoundsCount) {
      console.log(`Congratulations, ${userName}!`);
      return null;
    }
    const {
      question,
      correctAnswer,
    } = makeMove();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your Answer: ');
    if (userAnswer !== correctAnswer) {
      console.log(`"${userAnswer}" is the wrong answer ;(. Correct answer was "${correctAnswer}".`);
      console.log(`Lets try again, ${userName}!`);
      return null;
    }
    console.log('Correct!');
    return iter(roundNumber + 1);
  };
  return iter();
};

export default startGame;
