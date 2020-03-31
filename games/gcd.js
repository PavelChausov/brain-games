import getRandomNumber from '../src/utils/get-random-number.js';
import gameEngine from '../src/index.js';

const gcd = (a, b) => {
  if (!b) {
    return a;
  }
  return gcd(b, a % b);
};

const rules = 'Find the greatest common divisor of given numbers.';
const minNumber = 1;
const maxNumber = 100;

const getGCDRules = () => {
  const makeMove = () => {
    const number1 = getRandomNumber(minNumber, maxNumber);
    const number2 = getRandomNumber(minNumber, maxNumber);
    const correctAnswer = gcd(number1, number2);
    const question = `${number1} ${number2}`;
    return { question, correctAnswer };
  };
  gameEngine({ rules, makeMove });
};
export default getGCDRules;
