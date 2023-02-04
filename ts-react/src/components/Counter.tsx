import { Component, MouseEventHandler } from 'react';

export type CounterProps = {};

export type CounterState = {
  readonly count: number;
};

export default class Counter extends Component<CounterProps, CounterState> {
  constructor(props: CounterProps) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  static defaultProps: CounterProps = {};
  static getDerivedStateFromProps(
    nextProps: CounterProps,
    prevState: CounterState,
  ): CounterState | null {
    return false ? { count: 2 } : null;
  }

  componentDidMount(): void {
    this.setState({});
  }

  shouldComponentUpdate(
    nextProps: CounterProps,
    nextState: CounterState,
    nextContext: any,
  ): boolean {
    // if (nextProps.count !== nextContext.) {}
    return true;
  }

  componentDidUpdate(
    prevProps: CounterProps,
    prevState: CounterState,
    snapshot?: any,
  ): void {
    // if (prevProps.count !== this.) {}
  }

  componentWillUnmount(): void {}

  handleClick: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement> = (
    e,
  ) => {
    console.log(`${e.clientX}, ${e.clientY}`);
    this.setState(({ count }) => ({
      count: ++count,
    }));
    // this.setState({
    //   count: this.state.count + 1,
    // });
  };

  render(): JSX.Element {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleClick}>Increment</button>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a href="#" onClick={this.handleClick}>
          [ HYPERLINK BLOCKED ]
        </a>
      </div>
    );
  }
}
