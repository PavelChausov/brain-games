const getEvenRules = () => {
  const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
  const makeMove = () => {
    const limit = 100;
    const number = Math.floor(Math.random() * Math.floor(limit));
    const correctAnswer = (number % 2 === 0) ? 'yes' : 'no';
    const question = number.toString();
    return { question, correctAnswer };
  };
  return { rules, makeMove };
};
export default getEvenRules;
