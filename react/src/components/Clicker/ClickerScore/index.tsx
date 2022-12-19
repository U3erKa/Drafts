import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class ClickerScore extends Component<{ score: number }> {
  static propTypes = { score: PropTypes.number };

  render() {
    const { score } = this.props;
    return <p>Clicks: {score}</p>;
  }
}
