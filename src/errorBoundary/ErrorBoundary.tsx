import React, { ReactNode } from 'react';

type ErrorBoundaryProps = {
  children: ReactNode;
};
type ErrorBoundaryState = {
  hasError: boolean;
};

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  state = { hasError: false };

  componentDidCatch(error: Error) {
    this.setState({
      hasError: true,
    });
    console.error('error', error);
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;
    if (hasError) {
      return (
        <div>
          <h2>Something went wrong.</h2>
        </div>
      );
    }
    return children;
  }
}

export default ErrorBoundary;
