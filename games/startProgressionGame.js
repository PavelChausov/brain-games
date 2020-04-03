import getRandomNumber from '../src/utils/get-random-number.js';
import startGame from '../src/index.js';

const minNumber = 0;
const maxNumber = 100;
const minStepSize = 1;
const maxStepSize = 15;
const progressionSize = 10;
const description = 'Find the greatest common divisor of given numbers.';

const makeProgression = (limit, startElement, stepSize, indexToReplace) => {
  const iter = (acc, stepNumber) => {
    if (stepNumber === limit) {
      return acc;
    }
    const newElem = (stepNumber === indexToReplace) ? '..' : startElement + stepSize * stepNumber;
    return iter([...acc, newElem], stepNumber + 1);
  };
  return iter([], 0);
};

const makeMove = () => {
  const startElement = getRandomNumber(minNumber, maxNumber);
  const stepSize = getRandomNumber(minStepSize, maxStepSize);
  const indexToReplace = getRandomNumber(0, progressionSize);
  const question = makeProgression(progressionSize, startElement, stepSize, indexToReplace).join(' ');
  const correctAnswer = (startElement + stepSize * indexToReplace).toString();
  return { question, correctAnswer };
};

const startProgressionGame = () => {
  startGame(description, makeMove);
};
export default startProgressionGame;
