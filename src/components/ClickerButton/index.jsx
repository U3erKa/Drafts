// @ts-check
'use strict';

import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class ClickerButton extends Component {
  static propTypes = {clicker: PropTypes.func.isRequired};

  render() {
    const { clicker } = this.props;
    return <button onClick={clicker}>ClickerButton</button>;
  }
}
