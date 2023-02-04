import React, { Component } from 'react';
import { UserContext } from 'contexts';

export default class UserHeader extends Component {
  render() {
    // @ts-expect-error
    return (
      <UserContext.Consumer>
        {(userData) => <p>{userData.username}</p>}
      </UserContext.Consumer>
    );
  }
}
