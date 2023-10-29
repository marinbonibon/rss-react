import React, { ReactNode } from 'react';
import './Loader.css';

type MyProps = undefined;
type MyState = undefined;

class Loader extends React.Component<MyProps, MyState> {
  render(): ReactNode {
    return (
      <div className="loader">
        <div className="spinner" />
      </div>
    );
  }
}

export default Loader;
