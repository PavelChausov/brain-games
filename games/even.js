import getRandomNumber from '../src/utils/get-random-number.js';
import gameEngine from '../src/index.js';

const isEven = (n) => (n % 2 === 0);

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
const minNumber = 0;
const maxNumber = 100;

const getEvenRules = () => {
  const makeMove = () => {
    const number = getRandomNumber(minNumber, maxNumber);
    const correctAnswer = isEven(number) ? 'yes' : 'no';
    const question = number.toString();
    return { question, correctAnswer };
  };
  gameEngine(rules, makeMove);
};
export default getEvenRules;
