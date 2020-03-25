const gcd = (a, b) => {
  if (!b) {
    return a;
  }
  return gcd(b, a % b);
};

const getGCDRules = () => {
  const rules = 'Find the greatest common divisor of given numbers.';
  const makeMove = () => {
    const limit = 100;
    const number1 = Math.floor(Math.random() * Math.floor(limit)) + 1; // число должно быть > 0
    const number2 = Math.floor(Math.random() * Math.floor(limit)) + 1;
    const correctAnswer = gcd(number1, number2);
    const question = `${number1} ${number2}`;
    return { question, correctAnswer };
  };
  return { rules, makeMove };
};
export default getGCDRules;
