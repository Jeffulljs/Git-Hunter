import React, { Component } from 'react';
import UserItem from './UserItem';

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
      <div style={userStyle}>
        {this.state.users.map(user => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
}

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem'
};

export default Users;
