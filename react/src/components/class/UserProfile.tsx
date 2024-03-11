import { Component } from 'react';
import { UserContext } from 'contexts';

export default class UserProfile extends Component {
  render() {
    return (
      <UserContext.Consumer>
        {({ username, age, gender }) => (
          <>
            <h1>Username: {username}</h1>
            <p>Age: {age}</p>
            <p>Gender: {gender}</p>
          </>
        )}
      </UserContext.Consumer>
    );
  }
}
