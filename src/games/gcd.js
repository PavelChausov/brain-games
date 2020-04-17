import getRandomNumber from '../utils/get-random-number.js';
import playGame from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';
const minNumber = 1;
const maxNumber = 100;

const getGCD = (a, b) => {
  if (!b) {
    return a;
  }
  return getGCD(b, a % b);
};

const getRoundData = () => {
  const number1 = getRandomNumber(minNumber, maxNumber);
  const number2 = getRandomNumber(minNumber, maxNumber);
  const correctAnswer = getGCD(number1, number2).toString();
  const question = `${number1} ${number2}`;
  return { question, correctAnswer };
};

const playGCDGame = () => playGame(description, getRoundData);

export default playGCDGame;
