import { evaluate, round } from 'mathjs';

const Operations = {
  calculateResult: (operation) => {
    try {
      return round(evaluate(operation), 6).toString();
    }
    catch (error) {
      alert('The expression is not correct, try to write a another one or correct it.');
    }
  },
};

export default Operations;