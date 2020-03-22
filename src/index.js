import readlineSync from 'readline-sync';

const greetings = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

const brainEven = (userName) => {
  const messages = {
    start: () => 'Answer "yes" if the number is even, otherwise answer "no".',
    question: (number) => `Question: ${number}\n`,
    win: () => `Congratulations, ${userName}!`,
    loss: (wrongAnswer, correctAnswer) => `"${wrongAnswer}" is the wrong answer ;(. Correct answer was "${correctAnswer}"
Lets try again, ${userName}!`,
    correct: () => 'Correct!',
  };
  console.log(messages.start());
  const iter = (moveNumber) => {
    if (moveNumber === 3) {
      console.log(messages.win());
      return null;
    }
    const number = Math.floor(Math.random() * Math.floor(100));
    const correctAnswer = (number % 2 === 0) ? 'yes' : 'no';
    const userAnswer = readlineSync.question(messages.question(number));
    if (userAnswer !== correctAnswer) {
      console.log(messages.loss(userAnswer, correctAnswer));
      return null;
    }
    console.log(messages.correct());
    return iter(moveNumber + 1);
  };
  return iter(0);
};

export { greetings, brainEven };
