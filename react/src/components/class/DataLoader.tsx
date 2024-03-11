import { Component, type JSX } from 'react';

class DataLoader extends Component<
  {
    loadData: () => Promise<JSON[]>;
    render: (...args: unknown[]) => JSX.Element;
  },
  { data: unknown[]; isLoading: boolean; error: string | null; page: number }
> {
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
  componentDidUpdate(_prevProps, prevState: { page: number }) {
    const { page } = this.state;
    if (page !== prevState.page) {
      this.load();
    }
  }

  load = async () => {
    try {
      // const { page } = this.state;
      const { loadData } = this.props;
      this.setState({ isLoading: true });

      const data = await loadData();
      this.setState({ data });
    } catch (error: any) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  mapDataEntries = (data: JSON, id: number) => (
    <div key={id}>
      <pre>{JSON.stringify(data, undefined, 4)}</pre>
    </div>
  );

  render() {
    return this.props.render(this.state);
  }
}

export default DataLoader;
