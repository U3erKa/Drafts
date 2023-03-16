import React, { Component } from 'react';
import { UserContext } from 'contexts';

export default class UserHeader extends Component {
  render() {
    return (
      <UserContext.Consumer>
        {/* @ts-expect-error */}
        {(userData) => <p>{userData.username}</p>}
      </UserContext.Consumer>
    );
  }
}
