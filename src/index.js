import readlineSync from 'readline-sync';

const maxRoundsCount = 3;

const playGame = (description, getRoundData) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(description);
  for (let i = 0; i < maxRoundsCount; i += 1) {
    const {
      question,
      correctAnswer,
    } = getRoundData();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your Answer: ');
    if (userAnswer !== correctAnswer) {
      console.log(`"${userAnswer}" is the wrong answer ;(. Correct answer was "${correctAnswer}".`);
      console.log(`Lets try again, ${userName}!`);
      return null;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
  return null;
};

export default playGame;
