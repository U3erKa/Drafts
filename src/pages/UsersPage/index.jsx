import React, { Component } from 'react';

class UsersPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isLoading: false,
      error: null,
      page: 1,
    };
  }

  componentDidMount() {
    this.load();
  }
  componentDidUpdate(prevProps, prevState) {
    const { page } = this.state;
    if (page !== prevState.page) {
      this.load();
    }
  }

  load = () => {
    const { page } = this.state;
    this.setState({ isLoading: true });
    fetch(`https://randomuser.me/api/?page=${page}&results=10&seed=foobarbaz&inc=name,gender,location`)
      .then((res) => res.json())
      .then((data) => {
        const { results } = data;
        this.setState({ users: results });
      })
      .catch((error) => {
        this.setState({ error: error.message });
      })
      .finally(() => {
        this.setState({ isLoading: false });
      });
  };

  mapUsers = (user) => (
    <div key={user.id}>
      <pre>{JSON.stringify(user, undefined, 4)}</pre>
    </div>
  );

  nextPage = () => {
    const { page } = this.state;
    this.setState({ page: page + 1 });
  };

  render() {
    const { users, isLoading, error } = this.state;
    const usersList = users.map(this.mapUsers);

    if (isLoading) {
      return <div>Loading...</div>;
    }
    if (error) {
      return <div>Error: {error}</div>;
    }

    return (
      <div>
        <button onClick={this.nextPage}>Next page</button>
        {usersList}
      </div>
    );
  }
}

export default UsersPage;
