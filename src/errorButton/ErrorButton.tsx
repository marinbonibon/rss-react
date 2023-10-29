import React, { ReactNode } from 'react';
import './ErrorButton.css';

type MyProps = {
  text: string;
};
type MyState = {
  hasError: boolean;
};

class ErrorButton extends React.Component<MyProps, MyState> {
  state = {
    hasError: false,
  };

  setError = (): void => {
    this.setState({
      hasError: true,
    });
  };

  throwError = (): void => {
    throw new Error('Something went wrong');
  };

  render(): ReactNode {
    const { text } = this.props;
    this.state.hasError && this.throwError();
    return (
      <button className="error-button" onClick={this.setError}>
        {text}
      </button>
    );
  }
}

export default ErrorButton;
