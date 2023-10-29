import React, { ChangeEvent } from 'react';

type MyProps = {
  onClick: (string) => void;
};
type MyState = {
  name: string;
};

class Search extends React.Component<MyProps, MyState> {
  state = {
    name: '',
  };

  componentDidMount() {
    const searchTerm = localStorage.getItem('searchTerm');
    searchTerm &&
      this.setState({
        name: searchTerm,
      });
  }

  handleInputChange = (name: string): void => {
    this.setState({
      name,
    });
  };

  handleOnClick = (): void => {
    localStorage.setItem('searchTerm', this.state.name);
    this.props.onClick(this.state.name);
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.name}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            this.handleInputChange(e.target.value)
          }
          placeholder="enter the name"
        />
        <button onClick={this.handleOnClick}>Search</button>
      </div>
    );
  }
}

export default Search;
