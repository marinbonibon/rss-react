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
      <section className="wrapper">
        {this.props.results.map((el: Card) => (
          <div key={el.id} className="card">
            <img className="card-image" src={el.image} alt={el.name} />
            <p>Name: {el.name}</p>
            <p>Status: {el.status}</p>
            <p>Species: {el.species}</p>
          </div>
        ))}
      </section>
    );
  }
}

export default Result;
