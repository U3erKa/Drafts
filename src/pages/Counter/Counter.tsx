import React, { ChangeEvent } from 'react';
import { Dispatch } from '@reduxjs/toolkit';
import { connect } from 'react-redux';
import { decrement, increment, setStep } from 'store/slices/counter';

function Counter(props: any) {
  const { count, step, increment, decrement, setStep } = props;

  return (
    <div>
      <p>Count: {count}</p>
      <label>
        Step:
        <input type="number" value={step} onChange={setStep} />
        {/* <input
          type="number"
          value={step}
          onChange={({ target: { value } }: ChangeEvent<HTMLInputElement>) => setStep(value)}
        /> */}
      </label>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

function mapStateToProps(state: any) {
  return { count: state.count, step: state.step };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
    setStep: ({ target: { value } }: ChangeEvent<HTMLInputElement>) => dispatch(setStep(value)),
  };
}

// const mapDispatchToProps = { increment, decrement, setStep };

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
