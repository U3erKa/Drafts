import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Aloha extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isGreeting: false,
      clicks: 0,
    };
  }
  handleClick = () => {
    this.setState({ isGreeting: !this.state.isGreeting });
  };

  render() {
    const { name } = this.props;
    const { isGreeting } = this.state;
    return (
      <>
        <p>
          {isGreeting ? 'Hello' : 'Bye'}, {name}!
        </p>
        <button onClick={this.handleClick}>Change Mode</button>
      </>
    );
  }
  static propTypes = {
    name: PropTypes.string,
  };
}

export default Aloha;
