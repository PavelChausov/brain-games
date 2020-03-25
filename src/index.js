import readlineSync from 'readline-sync';

const greetings = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

const makeMessages = ({ userName, rules }) => ({
  rules: () => console.log(rules),
  question: (q) => readlineSync.question(`Question: ${q} \nYour answer: `),
  win: () => console.log(`Congratulations, ${userName}!`),
  loss: (wrongAnswer, correctAnswer) => console.log(`"${wrongAnswer}" is the wrong answer ;(. Correct answer was "${correctAnswer}".`
    + `\nLets try again, ${userName}!`),
  correct: () => console.log('Correct!'),
});

const maxRoundsCnt = 3;

const game = ({ userName, gameRules }) => {
  const { rules, makeMove } = gameRules;
  const messages = makeMessages({ userName, rules });
  messages.rules();
  const iter = (roundNumber) => {
    if (roundNumber === maxRoundsCnt) {
      messages.win();
      return null;
    }
    const {
      question,
      correctAnswer,
    } = makeMove();
    const userAnswer = messages.question(question);
    if (userAnswer.toString() !== correctAnswer.toString()) {
      messages.loss(userAnswer, correctAnswer);
      return null;
    }
    messages.correct();
    return iter(roundNumber + 1);
  };
  return iter(0);
};

export { greetings, game };
