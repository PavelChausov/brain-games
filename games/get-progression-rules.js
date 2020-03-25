const makeProgression = (progressionSize = 10, startElement = 0) => {
  const stepSize = Math.floor(Math.random() * Math.floor(15));
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
  const progressionSize = 10;
  const rules = 'Find the greatest common divisor of given numbers.';
  const makeMove = () => {
    const startElement = Math.floor(Math.random() * Math.floor(100));
    const progression = makeProgression(progressionSize, startElement);
    const indexToReplace = Math.floor(Math.random() * Math.floor(10));
    const correctAnswer = progression[indexToReplace];
    const question = progression
      .map((e, i) => ((i === indexToReplace) ? '..' : e))
      .join(' ');
    return { question, correctAnswer };
  };
  return { rules, makeMove };
};
export default getProgressionRules;
