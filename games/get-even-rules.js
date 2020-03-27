import getRandomNumber from '../utils/get-random-number.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
const minNumber = 0
const maxNumber = 100;


const getEvenRules = () => {
  const makeMove = () => {
    const number = getRandomNumber(minNumber, maxNumber);
    const correctAnswer = (number % 2 === 0) ? 'yes' : 'no';
    const question = number.toString();
    return { question, correctAnswer };
  };
  return { rules, makeMove };
};
export default getEvenRules;
