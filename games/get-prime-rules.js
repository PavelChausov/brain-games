const isPrime = (num) => {
  const s = Math.sqrt(num);
  const iter = (t = 2) => {
    if (num % t === 0) {
      return false;
    }
    if (t > s) {
      return true;
    }
    return iter(t + 1);
  };
  return iter();
};

const getPrimeRules = () => {
  const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const makeMove = () => {
    const number = Math.floor(Math.random() * Math.floor(100)) + 2; // число должно быть >= 2
    const correctAnswer = (isPrime(number)) ? 'yes' : 'no';
    const question = `${number}`;
    return { question, correctAnswer };
  };
  return { rules, makeMove };
};
export default getPrimeRules;
