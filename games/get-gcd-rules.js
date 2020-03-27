import getRandomNumber from '../utils/get-random-number.js';

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
  return { rules, makeMove };
};
export default getGCDRules;
