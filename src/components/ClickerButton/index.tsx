// @ts-check

import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class ClickerButton extends Component<any> {
  static propTypes = {clicker: PropTypes.func.isRequired};

  render() {
    const { clicker } = this.props;
    return <button onClick={clicker}>ClickerButton</button>;
  }
}
