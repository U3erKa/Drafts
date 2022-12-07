import React from 'react';
import { connect } from 'react-redux';
import { decrement, increment } from 'store/slices/counter';

function Counter(props: any) {
  console.log(props);
  const { count, step, dispatch } = props;
  return (
    <div>
      <p>Count: {count}</p>
      <p>Step: {step}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}

function mapStateToProps(state: any) {
  return state;
}

// const withState = connect(mapStateToProps);
// const CounterWithState = withState(Counter);

export default connect(mapStateToProps)(Counter);
