import PropTypes from 'prop-types';
import React, { Component, MouseEventHandler } from 'react';

export default class ClickerButton extends Component<{ clicker: MouseEventHandler<HTMLButtonElement> }> {
  static propTypes = { clicker: PropTypes.func.isRequired };

  render() {
    const { clicker } = this.props;
    return <button onClick={clicker}>ClickerButton</button>;
  }
}
