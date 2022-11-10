import React, { Component } from 'react';

export default class Timer extends Component {
  state = {
    number: 10,
    isVisible: true,
  };

  decrementNumber = () => {
    const { number } = this.state;
    this.setState({ number: number - 1 });
  };

  componentDidMount() {
    console.log('Did mount');
    this.intervalId = setInterval(this.decrementNumber, 1000);
  }
  componentDidUpdate() {
    const { number } = this.state;

    console.log('Did update');
    if (number === 0) {
      clearInterval(this.intervalId);
    }
  }
  componentWillUnmount() {
    console.log('Will unmount');
  }

  render() {
    const { number } = this.state;

    // if (number !== 0) {
    //   setTimeout(this.decrementNumber, 1000);
    // }

    return (
      <div>
        <p>{number}</p>
      </div>
    );
  }
}
