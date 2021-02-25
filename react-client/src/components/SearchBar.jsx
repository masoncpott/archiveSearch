import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: ''
    }
    this.updateState = this.updateState.bind(this);
    this.handleInputSearch = this.handleInputSearch.bind(this);
  }

  updateState(event) {
    this.setState({inputText: event.target.value})
  }

  handleInputSearch() {
    // debugger
    this.props.handleInputSearch(this.state.inputText)
  }

  render() {
    return (
      <div>
        <span>Enter an artist's full name: </span>
        <input type='text' onChange={this.updateState}></input>
        <button onClick={this.handleInputSearch}>Search</button>
      </div>
    )
  }
}


export default SearchBar;