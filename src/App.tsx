import './App.css';
import Search from './search/Search';
import React, { ReactNode } from 'react';
import Result from './result/Result';
import { Card } from './types/card';
import ErrorBoundary from './errorBoundary/ErrorBoundary';

type MyProps = undefined;
type MyState = {
  results: Card[];
};

class App extends React.Component<MyProps, MyState> {
  baseUrl = 'https://rickandmortyapi.com/api/character/?page=1';
  state = {
    results: [],
  };

  componentDidMount(): void {
    const searchTerm = localStorage.getItem('searchTerm');
    const name = searchTerm ? searchTerm : '';
    this.filterResults(name);
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
        console.log('responseData.results', responseData.results);
        this.handleResultChange(responseData.results);
      });
  };

  filterResults = (name: string): void => {
    const url = `${this.baseUrl}&name=${name}`;
    console.log('url', url);
    this.fetchData(url);
  };

  render(): ReactNode {
    const { results } = this.state;
    return (
      <ErrorBoundary>
        <>
          <Search onClick={this.filterResults} />
          <Result results={results} />
        </>
      </ErrorBoundary>
    );
  }
}

export default App;
