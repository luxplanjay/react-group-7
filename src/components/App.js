import React, { Component } from 'react';
import SignupForm from './SignupForm';
import FriendList from './FriendList';

const getVisibleFriends = (allFriends, filter) => {
  return allFriends.filter(friend => friend.includes(filter));
};

class App extends Component {
  state = {
    friends: ['mango', 'poly', 'ajax', 'kiwi'],
    filter: '',
  };

  handleFilterChange = e => {
    this.setState({
      filter: e.currentTarget.value,
    });
  };

  submitForm = obj => {
    console.log(obj);
  };

  render() {
    const { friends, filter } = this.state;

    const visibleFriends = getVisibleFriends(friends, filter);

    return (
      <div className="App">
        <input
          className="Input"
          type="text"
          name="filter"
          value={filter}
          onChange={this.handleFilterChange}
        />

        {visibleFriends.length > 0 && <FriendList friends={visibleFriends} />}
        <SignupForm onSubmit={this.submitForm} />
      </div>
    );
  }
}

export default App;
