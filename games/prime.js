import getRandomNumber from '../src/utils/get-random-number.js';
import playGame from '../src/index.js';

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
const getRoundData = () => {
  const question = getRandomNumber(minNumber, maxNumber);
  const correctAnswer = (isPrime(question)) ? 'yes' : 'no';
  return { question, correctAnswer };
};

const playPrimeGame = () => {
  playGame(description, getRoundData);
};
export default playPrimeGame;
