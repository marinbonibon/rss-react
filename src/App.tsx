import './App.css';
import Search from './search/Search';
import React from 'react';
import Result from './result/Result';
import { Card } from './types/card';

type MyProps = undefined;
type MyState = {
  results: Card[];
};

class App extends React.Component<MyProps, MyState> {
  baseUrl = 'https://rickandmortyapi.com/api/character/?page=1';
  state = {
    results: [],
  };

  componentDidMount() {
    this.filterResults('');
  }

  handleResultChange = (results: Card[]): void => {
    this.setState({
      results,
    });
  };

  fetchData = (url: string): void => {
    fetch(url)
      .then((res: Response) => {
        return res.json();
      })
      .then((responseData) => {
        this.handleResultChange(responseData.results);
      });
  };

  filterResults = (name: string): void => {
    const url = `${this.baseUrl}&name=${name}`;
    this.fetchData(url);
  };

  render() {
    return (
      <>
        <Search onClick={this.filterResults} />
        <Result results={this.state.results} />
      </>
    );
  }
}

export default App;
