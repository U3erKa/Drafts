import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Aloha extends Component<any, any> {
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
    const { name, makeFavourite, id } = this.props;
    // const { name, func } = this.props;
    const { isGreeting } = this.state;
    return (
      <div>
        <p>
          {isGreeting ? 'Hello' : 'Bye'}, {name}!
        </p>
        <button onClick={this.handleClick}>Change Mode</button>
        {/* <button onClick={func}>Exec func</button> */}
        <button onClick={() => makeFavourite(id)}>Toggle favourite</button>
      </div>
    );
  }
  static propTypes = {
    name: PropTypes.string.isRequired,
    func: PropTypes.func,
    makeFavourite: PropTypes.func,
    id: PropTypes.number.isRequired,
  };
}

export default Aloha;
