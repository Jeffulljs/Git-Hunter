import React, { Component } from 'react';

export class Search extends Component {
  state = {
    text: ''
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.searchUsers(this.state.text);
    this.setState({
      text: ''
    });
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} className="tab">
          <input
            type="text"
            name="text"
            placeholder="Chercher Profils..."
            value={this.state.text}
            onChange={this.onChange}
          />
          <input
            type="submit"
            value="Search"
            className="btn btn-dark btn-block"
          />
        </form>
      </div>
    );
  }
}

export default Search;