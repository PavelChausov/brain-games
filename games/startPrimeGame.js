import getRandomNumber from '../src/utils/get-random-number.js';
import startGame from '../src/index.js';

const minNumber = 2;
const maxNumber = 100;
const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }
  const s = Math.sqrt(num);
  const iter = (t) => {
    if (num % t === 0) {
      return false;
    }
    if (t > s) {
      return true;
    }
    return iter(t + 1);
  };
  return iter(2);
};
const makeMove = () => {
  const number = getRandomNumber(minNumber, maxNumber);
  const correctAnswer = (isPrime(number)) ? 'yes' : 'no';
  const question = `${number}`;
  return { question, correctAnswer };
};

const startPrimeGame = () => {
  startGame(description, makeMove);
};
export default startPrimeGame;
