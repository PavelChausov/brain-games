import getRandomNumber from '../src/utils/get-random-number.js';
import gameEngine from '../src/index.js';

const minNumber = 0;
const minStepSize = 1;
const maxStepSize = 15;
const maxNumber = 100;
const progressionSize = 10;
const rules = 'Find the greatest common divisor of given numbers.';

const makeProgression = (size = 10, start = 0) => {
  const stepSize = getRandomNumber(minStepSize, maxStepSize);
  const iter = (acc = [start], stepNumber = 0) => {
    if (stepNumber === size) {
      return acc;
    }
    const newElem = acc[acc.length - 1] + stepSize;
    return iter([...acc, newElem], stepNumber + 1);
  };
  return iter();
};
const getProgressionRules = () => {
  const makeMove = () => {
    const startElement = getRandomNumber(minNumber, maxNumber);
    const progression = makeProgression(progressionSize, startElement);
    const indexToReplace = getRandomNumber(0, progressionSize);
    const correctAnswer = progression[indexToReplace];
    const question = progression
      .map((e, i) => ((i === indexToReplace) ? '..' : e))
      .join(' ');
    return { question, correctAnswer };
  };
  gameEngine({ rules, makeMove });
};
export default getProgressionRules;
