import getRandomNumber from '../src/utils/get-random-number.js';
import startGame from '../src/index.js';

const description = 'Find the greatest common divisor of given numbers.';
const minNumber = 1;
const maxNumber = 100;
const gcd = (a, b) => {
  if (!b) {
    return a;
  }
  return gcd(b, a % b);
};
const makeMove = () => {
  const number1 = getRandomNumber(minNumber, maxNumber);
  const number2 = getRandomNumber(minNumber, maxNumber);
  const correctAnswer = gcd(number1, number2).toString();
  const question = `${number1} ${number2}`;
  return { question, correctAnswer };
};

const startGCDGame = () => {
  startGame(description, makeMove);
};
export default startGCDGame;
