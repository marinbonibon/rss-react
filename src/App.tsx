import './App.css';
import Search from './search/Search';
import React, { ReactNode } from 'react';
import Result from './result/Result';
import { Card } from './types/card';
import ErrorBoundary from './errorBoundary/ErrorBoundary';
import Loader from './loader/Loader';

type MyState = {
  results: Card[];
  isLoading: boolean;
};

class App extends React.Component<object, MyState> {
  baseUrl = 'https://rickandmortyapi.com/api/character/?page=1';
  state = {
    results: [],
    isLoading: false,
  };

  componentDidMount(): void {
    const searchTerm = localStorage.getItem('searchTerm');
    const name = searchTerm ? searchTerm : '';
    this.filterResults(name);
  }

  handleResultChange = (results: Card[]): void => {
    this.setState({
      results,
      isLoading: false,
    });
  };

  fetchData = (url: string): void => {
    this.setState((prevState) => ({
      ...prevState,
      isLoading: true,
    }));
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

  render(): ReactNode {
    const { results, isLoading } = this.state;
    return (
      <ErrorBoundary>
        <>
          <Search onClick={this.filterResults} />
          <Result results={results} />
          {isLoading && <Loader />}
        </>
      </ErrorBoundary>
    );
  }
}

export default App;
