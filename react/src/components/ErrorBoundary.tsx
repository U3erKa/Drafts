import { Component, type ErrorInfo, type PropsWithChildren, type ReactNode } from 'react';

export type Props = PropsWithChildren<{
  fallback: ReactNode;
  onError?: (error: unknown, info: ErrorInfo) => void;
}>;

export type State = {
  hasError: boolean;
  error: State['hasError'] extends true ? unknown : null;
};

export default class ErrorBoundary extends Component<Props, State> {
  state = { hasError: false, error: null };
  static getDerivedStateFromError(error: unknown) {
    return { hasError: true, error };
  }

  componentDidCatch(error: unknown, errorInfo: ErrorInfo) {
    console.error(error);
    console.warn(errorInfo);
    this.props.onError?.(error, errorInfo);
  }
  render() {
    if (this.state.hasError) return this.props.fallback;
    return this.props.children;
  }
}
