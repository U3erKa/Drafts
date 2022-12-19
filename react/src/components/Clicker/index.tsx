import React, { Component } from 'react';
import ClickerButton from './ClickerButton';
import ClickerScore from './ClickerScore';

export default class Clicker extends Component<Record<string, never>, { counter: number }> {
  state = {
    counter: 0,
  };

  clicker = () => {
    const { counter } = this.state;
    const newState = {
      counter: counter + 1,
    };

    this.setState({ counter: newState.counter });
  };

  render() {
    const { counter } = this.state;
    return (
      <div>
        <ClickerScore score={counter} />
        <ClickerButton clicker={this.clicker} />
      </div>
    );
  }
}
