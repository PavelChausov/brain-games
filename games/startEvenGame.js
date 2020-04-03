import getRandomNumber from '../src/utils/get-random-number.js';
import startGame from '../src/index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const minNumber = 0;
const maxNumber = 100;
const isEven = (n) => (n % 2 === 0);
const makeMove = () => {
  const number = getRandomNumber(minNumber, maxNumber);
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  const question = number;
  return { question, correctAnswer };
};

const startEvenGame = () => {
  startGame(description, makeMove);
};
export default startEvenGame;
