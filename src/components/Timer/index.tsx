import React, { Component } from 'react';
// @ts-expect-error
import styles from './Timer.module.scss';

export default class Timer extends Component<any, any> {
  state = {
    number: 10,
    isDouble: false,
  };

  decrementNumber = () => {
    const { number, isDouble } = this.state;
    this.setState({ number: number - 1 });

    if (isDouble) {
      this.setState((prevState) => ({ number: prevState.number - 1 }));
    }
  };

  componentDidMount() {
    console.log('Did mount');
    // @ts-expect-error
    this.intervalId = setInterval(this.decrementNumber, 1000);
  }
  componentDidUpdate() {
    const { number } = this.state;

    console.log('Did update');
    if (number === 0) {
      // clearInterval(this.intervalId);
    }
  }
  componentWillUnmount() {
    console.log('Will unmount');
    // @ts-expect-error
    clearInterval(this.intervalId);
  }

  render() {
    const { number } = this.state;
    // const styles = { color: number > 0 ? 'green' : 'red', fontSize: '24px' };

    // if (number !== 0) {
    //   setTimeout(this.decrementNumber, 1000);
    // }

    return (
      <div>
        <p>{number}</p>
        <button className={styles.btn} onClick={this.decrementNumber}>
          Decrement
        </button>
      </div>
    );
  }
}
