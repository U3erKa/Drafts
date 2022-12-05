import React, { Component, Key } from 'react';
import { getUsers } from 'api';

class UsersPage extends Component<
  Record<string, never>,
  {
    users: any[];
    isLoading: boolean;
    error: any;
    page: number;
    results: number;
    seed: string;
    nat: string;
    inc: string[];
  }
> {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isLoading: false,
      error: null,
      page: 1,
      results: 10,
      seed: 'foobarbaz',
      nat: 'ua',
      inc: ['gender', 'name', 'location', 'email', 'login'],
    };
  }

  componentDidMount() {
    this.load();
  }
  componentDidUpdate(_prevProps, prevState) {
    const { page } = this.state;
    if (page !== prevState.page) {
      this.load();
    }
  }

  load = async () => {
    try {
      const { page, results, seed, nat, inc } = this.state;
      this.setState({ isLoading: true });

      const users = await getUsers({ page, results, seed, nat, inc });
      this.setState({ users });
    } catch (error) {
      // @ts-expect-error error has message
      this.setState({ error: error.message });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  mapUsers = (user: any, id: Key) => (
    <div key={id}>
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
