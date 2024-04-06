// import PropTypes from 'prop-types';
import { Component } from 'react';
import Aloha from './Aloha';

export default class AlohaList extends Component {
  // static propTypes = { id: PropTypes.number.isRequired, name: PropTypes.string.isRequired };
  state = {
    users: [
      { id: 1, name: 'User1', isFavourite: false },
      { id: 2, name: 'User2', isFavourite: false },
      { id: 3, name: 'User3', isFavourite: false },
      { id: 4, name: 'User4', isFavourite: false },
      { id: 5, name: 'User5', isFavourite: false },
      { id: 6, name: 'User6', isFavourite: false },
    ],
  };

  sortUsers = () => {
    const { users } = this.state;
    const copy = structuredClone(users);

    copy.reverse();
    this.setState({ users: copy });
  };
  makeFavourite = (userId) => {
    const newUsers = this.state.users.map((user) => {
      return {
        ...user,
        isFavourite: userId === user.id ? true : user.isFavourite,
      };
    });
    this.setState({ users: newUsers });
  };

  render() {
    const { users } = this.state;
    const alohas = users.map((user) => (
      <li key={user.id}>
        <Aloha id={user.id} name={user.name} makeFavourite={this.makeFavourite} />
        {/* <Aloha name={user.name} func={this.sortUsers} /> */}
      </li>
    ));
    const favUsers = users.filter((user) => user.isFavourite);
    const favourites = favUsers.map((user) => <li key={user.id}>{user.name}</li>);

    return (
      <ul>
        <h1>Aloha List</h1>
        <button onClick={this.sortUsers}>Change order</button>
        <section>
          <h2>Fav Users:</h2>
          {favourites}
        </section>
        <section>
          <h1>List:</h1>
          {alohas}
        </section>
      </ul>
    );
  }
}
