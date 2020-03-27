import getRandomNumber from '../utils/get-random-number.js';

const isPrime = (num) => {
  const s = Math.sqrt(num);
  const iter = (t = 2) => {
    if (num % t === 0) {
      return false;
    }
    if (t > s) {
      return true;
    }
    return iter(t + 1);
  };
  return iter();
};

const minNumber = 2;
const maxNumber = 100;
const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getPrimeRules = () => {
  const makeMove = () => {
    const number = getRandomNumber(minNumber, maxNumber);
    const correctAnswer = (isPrime(number)) ? 'yes' : 'no';
    const question = `${number}`;
    return { question, correctAnswer };
  };
  return { rules, makeMove };
};
export default getPrimeRules;
