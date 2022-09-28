// Reducer action type

import { DECREMENT, INCREMENT, RESET } from "../Constant/counterConstant";

const incrementCounter = () => {
  return {
    type: INCREMENT,
  };
};
const decrementCounter = () => {
  return {
    type: DECREMENT,
  };
};
const resetCounter = () => {
  return {
    type: RESET,
  };
};

export { incrementCounter, decrementCounter, resetCounter };
