import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { getUsers } from '../../api';

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
  // static propTypes = {
  //   loadData: PropTypes.func,
  // };

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
      // const { page } = this.state;
      // eslint-disable-next-line react/prop-types
      const { loadData } = this.props;
      this.setState({ isLoading: true });

      const data = await loadData();
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
    // eslint-disable-next-line react/prop-types
    return this.props.render(this.state);
  }
}

export default DataLoader;
