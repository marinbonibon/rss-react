import React, { ChangeEvent, ReactNode } from 'react';
import './Search.css';
import ErrorButton from '../errorButton/ErrorButton';

type MyProps = {
  onClick: (arg: string) => void;
};
type MyState = {
  name: string | null;
};

class Search extends React.Component<MyProps, MyState> {
  searchTerm = localStorage.getItem('searchTerm');
  state = {
    name: this.searchTerm ? this.searchTerm : '',
  };

  handleInputChange = (name: string): void => {
    this.setState({
      name,
    });
  };

  handleOnClick = (): void => {
    localStorage.setItem('searchTerm', this.state.name);
    this.props.onClick(this.state.name);
  };

  render(): ReactNode {
    const { name } = this.state;
    return (
      <section className="search-section">
        <input
          className="search-input"
          type="text"
          value={name}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            this.handleInputChange(e.target.value)
          }
          placeholder="enter the name"
        />
        <button onClick={this.handleOnClick}>Search</button>
        <ErrorButton text="Error" />
      </section>
    );
  }
}

export default Search;
