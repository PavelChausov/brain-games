import getRandomNumber from '../utils/get-random-number.js';

const min = 0;
const maxStepSize = 15;
const maxNumber = 100;
const progressionSize = 10;
const rules = 'Find the greatest common divisor of given numbers.';

const makeProgression = (progressionSize = 10, startElement = 0) => {
  const stepSize = getRandomNumber(min, maxStepSize);
  const iter = (acc = [startElement], stepNumber = 0) => {
    if (stepNumber === progressionSize) {
      return acc;
    }
    const newElem = acc[acc.length - 1] + stepSize;
    return iter([...acc, newElem], stepNumber + 1);
  };
  return iter();
};
const getProgressionRules = () => {
  const makeMove = () => {
    const startElement = getRandomNumber(min, maxNumber);
    const progression = makeProgression(progressionSize, startElement);
    const indexToReplace = getRandomNumber(min, progressionSize);
    const correctAnswer = progression[indexToReplace];
    const question = progression
      .map((e, i) => ((i === indexToReplace) ? '..' : e))
      .join(' ');
    return { question, correctAnswer };
  };
  return { rules, makeMove };
};
export default getProgressionRules;
