import getRandomNumber from '../utils/get-random-number.js';
import playGame from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const minNumber = 0;
const maxNumber = 100;

const isEven = (n) => (n % 2 === 0);

const getRoundData = () => {
  const question = getRandomNumber(minNumber, maxNumber);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return { question, correctAnswer };
};

const playEvenGame = () => {
  playGame(description, getRoundData);
};

export default playEvenGame;
