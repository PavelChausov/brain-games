import getRandomNumber from '../src/utils/get-random-number.js';
import playGame from '../src/index.js';

const description = 'What is the result of the expression?';
const minNumber = 0;
const maxNumber = 100;
const operations = ['+', '-', '*'];
const calculate = (num1, num2, operation) => {
  switch (operation) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return null;
  }
};
const getRoundData = () => {
  const number1 = getRandomNumber(minNumber, maxNumber);
  const number2 = getRandomNumber(minNumber, maxNumber);
  const operationIndex = getRandomNumber(0, operations.length - 1);
  const operationSign = operations[operationIndex];
  const question = `${number1} ${operationSign} ${number2}`;
  const correctAnswer = calculate(number1, number2, operationSign).toString();
  return { question, correctAnswer };
};

const playCalcGame = () => {
  playGame(description, getRoundData);
};
export default playCalcGame;
