import { Component, type ReactNode } from 'react';

export type Props = { fallback: ReactNode; children: ReactNode };
export type State = {
  hasError: boolean;
  error: State['hasError'] extends true ? unknown : null;
};

export default class ErrorBoundary extends Component<Props, State> {
  state = { hasError: false, error: null };
  static getDerivedStateFromError(error: unknown) {
    return { hasError: true, error };
  }

  componentDidCatch(error: unknown, info: { componentStack: string }) {
    console.error(error);
    console.warn(info);
  }
  render() {
    if (this.state.hasError) return this.props.fallback;
    return this.props.children;
  }
}
