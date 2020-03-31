import getRandomNumber from '../src/utils/get-random-number.js';
import gameEngine from '../src/index.js';

const rules = 'What is the result of the expression?';
const minNumber = 0;
const maxNumber = 100;

const calc = () => {
  const operations = [
    (n1, n2) => ({
      correctAnswer: n1 * n2,
      question: `${n1} * ${n2}`,
    }),
    (n1, n2) => ({
      correctAnswer: n1 - n2,
      question: `${n1} - ${n2}`,
    }),
    (n1, n2) => ({
      correctAnswer: n1 + n2,
      question: `${n1} + ${n2}`,
    }),
  ];
  const makeMove = () => {
    const number1 = getRandomNumber(minNumber, maxNumber);
    const number2 = getRandomNumber(minNumber, maxNumber);
    const operationIndex = getRandomNumber(0, operations.length);
    const makeQuestion = operations[operationIndex];
    return makeQuestion(number1, number2);
  };
  gameEngine({ rules, makeMove });
};
export default calc;
