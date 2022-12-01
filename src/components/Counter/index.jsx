import React, { useReducer } from 'react';

const initialState = {
  count: 0,
  step: 1,
};

const ACTION_TYPES = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement',
  CHANGE_STEP: 'changeStep',
  RESET: 'reset',
};

function reducer(state, action) {
  switch (action.type) {
    case ACTION_TYPES.INCREMENT: {
      const newState = { ...state, count: state.count + state.step };
      return newState;
    }
    case ACTION_TYPES.DECREMENT: {
      const newCount = state.count - state.step;

      if (newCount > 0) {
        const newState = { ...state, count: newCount };
        return newState;
      }
      return state;
    }
    case ACTION_TYPES.CHANGE_STEP: {
      const newState = { ...state, step: Math.abs(action.payload) };
      return newState;
    }
    case ACTION_TYPES.RESET: {
      const newState = { ...initialState };
      return newState;
    }
    default:
      return state;
  }
}

// action creator
function increment() {
  const action = { type: ACTION_TYPES.INCREMENT };
  return action;
}

function changeStep(step) {
  return { type: ACTION_TYPES.CHANGE_STEP, payload: +step };
}

const Counter = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleStep = ({ target: { value } }) => dispatch(changeStep(value));

  const handleIncrement = () => dispatch(increment());
  const handleDecrement = () => dispatch({ type: ACTION_TYPES.DECREMENT });

  return (
    <div>
      <p>Count: {state.count}</p>
      <label>
        Step:
        <input type="number" value={state.step} onChange={handleStep} />
      </label>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={() => dispatch({ type: ACTION_TYPES.RESET })}>
        Reset
      </button>
    </div>
  );
};

export default Counter;
