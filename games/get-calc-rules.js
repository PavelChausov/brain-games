const getCalcRules = () => {
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
  const rules = 'What is the result of the expression?';
  const makeMove = () => {
    const limit = 100;
    const number1 = Math.floor(Math.random() * Math.floor(limit));
    const number2 = Math.floor(Math.random() * Math.floor(limit));
    const operationIndex = Math.floor(Math.random() * Math.floor(operations.length));
    const makeQuestion = operations[operationIndex];
    return makeQuestion(number1, number2);
  };
  return { rules, makeMove };
};
export default getCalcRules;
