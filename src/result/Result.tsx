import React from 'react';
import './Result.css';
import { Card } from '../types/card';

type MyProps = {
  results: Card[];
};
type MyState = undefined;

class Result extends React.Component<MyProps, MyState> {
  render() {
    return (
      <div className="wrapper">
        {this.props.results.map((el: Card) => (
          <div key={el.id}>
            <img src={el.image} alt={el.name} />
            <p>{el.name}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Result;
