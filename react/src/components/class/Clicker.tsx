import { Component } from 'react';
import ClickerButton from './ClickerButton';

export default class Clicker extends Component<Record<string, never>, { counter: number }> {
  state = {
    counter: 0,
  };

  clicker = () => {
    const { counter } = this.state;
    this.setState({
      counter: counter + 1,
    });
  };

  render() {
    const { counter } = this.state;
    return (
      <div>
        <p>Clicks: {counter}</p>
        <ClickerButton onClick={this.clicker} />
      </div>
    );
  }
}
