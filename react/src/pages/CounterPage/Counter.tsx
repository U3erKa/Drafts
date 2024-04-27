import { Component, type MouseEventHandler, type JSX } from 'react';

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
  static getDerivedStateFromProps(nextProps: CounterProps, prevState: CounterState): CounterState | null {
    return null;
    return { count: 2 };
  }

  componentDidMount(): void {}

  shouldComponentUpdate(nextProps: CounterProps, nextState: CounterState, nextContext: any): boolean {
    return true;
  }

  componentDidUpdate(prevProps: CounterProps, prevState: CounterState, snapshot?: any): void {}

  componentWillUnmount(): void {}

  handleClick: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement> = (e) => {
    console.log(`${e.clientX}, ${e.clientY}`);
    this.setState(({ count }) => ({
      count: ++count,
    }));
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
