import React, { Component } from 'react';
import UserHeader from '../../components/UserHeader';
import UserProfile from '../../components/UserProfile';
import { UserContext } from '../../contexts';

const userData = {
  username: 'User Userovich',
  age: 10,
  gender: 'male',
};

export default class UserPage extends Component {
  render() {
    return (
      <UserContext.Provider value={userData}>
        <div>UserPage</div>
        <UserHeader />
        <UserProfile />
      </UserContext.Provider>
    );
  }
}
