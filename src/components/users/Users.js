import React, { Component } from 'react';

export class Users extends Component {
  state = {
    users: [
      {
        id: '1',
        login: 'Hadi',
        avatar_url:
          'https://avatars0.githubusercontent.com/u/6206859?s=400&v=4',
        html_url: 'https://github.com/hadibere'
      },
      {
        id: '2',
        login: 'Hadi',
        avatar_url:
          'https://avatars0.githubusercontent.com/u/6206859?s=400&v=4',
        html_url: 'https://github.com/hadibere'
      },
      {
        id: '3',
        login: 'Hadi',
        avatar_url:
          'https://avatars0.githubusercontent.com/u/6206859?s=400&v=4',
        html_url: 'https://github.com/hadibere'
      }
    ]
  };
  render() {
    return (
      <div>
        {this.state.users.map(users => (
          <div key={users.id}>{users.login}</div>
        ))}
      </div>
    );
  }
}

export default Users;
