import React, { ReactNode } from 'react';
import './Loader.css';

class Loader extends React.Component<object, object> {
  render(): ReactNode {
    return (
      <div className="loader">
        <div className="spinner" />
      </div>
    );
  }
}

export default Loader;
