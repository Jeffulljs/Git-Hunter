import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Search extends Component {
  state = {
    text: ''
  };

  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired
  };

  onSubmit = e => {
    e.preventDefault();
    if (this.state.text === '') {
      this.props.setAlert(" Entrez du texte s'il vous plait");
    } else {
      this.props.searchUsers(this.state.text);
      this.setState({ text: '' });
    }
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    const { showClear, clearUsers } = this.props;
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
            value="Chercher"
            className="btn btn-dark btn-block"
          />
        </form>
        {showClear && (
          <button className="btn btn-light btn-block" onClick={clearUsers}>
            Effacer
          </button>
        )}
      </div>
    );
  }
}

export default Search;
