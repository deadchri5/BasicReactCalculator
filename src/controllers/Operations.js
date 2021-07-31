import mathjs, { evaluate, round} from 'mathjs';

const Operations = {
  calculateResult: (operation) => {
    return round(evaluate(operation), 6).toString();
  },
};

export default Operations;