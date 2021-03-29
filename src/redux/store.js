import { createStore } from 'redux';

const initialValue = { counterValue: 0 };

const reducer = (state = initialValue, { type, payload }) => {
  switch (type) {
    case 'counter/Increment':
      return { counterValue: state.counterValue + payload };

    case 'counter/Decrement':
      return { counterValue: state.counterValue - payload };

    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
