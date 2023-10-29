import React, { ReactNode } from 'react';
import './Result.css';
import { Card } from '../types/card';

interface MyProps {
  results: Card[];
}

class Result extends React.Component<MyProps, object> {
  render(): ReactNode {
    const { results } = this.props;
    return (
      <section className="wrapper">
        {results.map((el: Card) => (
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
