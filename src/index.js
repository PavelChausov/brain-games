import readlineSync from 'readline-sync';

const greetings = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

const maxRoundsCnt = 3;

const game = (gameRules) => {
  const userName = greetings();
  const { rules, makeMove } = gameRules;
  console.log(rules);
  const iter = (roundNumber = 0) => {
    if (roundNumber === maxRoundsCnt) {
      console.log(`Congratulations, ${userName}!`);
      return null;
    }
    const {
      question,
      correctAnswer,
    } = makeMove();
    const userAnswer = readlineSync.question(`Question: ${question} \nYour answer: `);
    if (userAnswer.toString() !== correctAnswer.toString()) {
      console.log(`"${userAnswer}" is the wrong answer ;(. Correct answer was "${correctAnswer}".`
        + `\nLets try again, ${userName}!`);
      return null;
    }
    console.log('Correct!');
    return iter(roundNumber + 1);
  };
  return iter();
};

export { greetings, game };
