import React, { Component } from 'react';
import { getUsers } from '../../api';

class DataLoader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
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

  load = async () => {
    try {
      const { page } = this.state;
      this.setState({ isLoading: true });

      const data = await getUsers({
        page,
        results: 10,
        seed: 'foobarbaz',
        nat: 'ua',
        inc: ['gender', 'name', 'location', 'email', 'login'],
      });
      this.setState({ data });
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  mapDataEntries = (data, id) => (
    <div key={id}>
      <pre>{JSON.stringify(data, undefined, 4)}</pre>
    </div>
  );

  nextPage = () => {
    const { page } = this.state;
    this.setState({ page: page + 1 });
  };

  render() {
    const { data, isLoading, error } = this.state;
    const entriesList = data.map(this.mapDataEntries);

    if (isLoading) {
      return <div>Loading...</div>;
    }
    if (error) {
      return <div>Error: {error}</div>;
    }

    return (
      <div>
        <button onClick={this.nextPage}>Next page</button>
        {entriesList}
      </div>
    );
  }
}

export default DataLoader;
