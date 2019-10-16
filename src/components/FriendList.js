/* eslint-disable */
import React from 'react';

const FriendList = ({ friends }) => (
  <ul>
    {friends.map(friend => (
      <li key={friend}>{friend}</li>
    ))}
  </ul>
);

export default FriendList;
