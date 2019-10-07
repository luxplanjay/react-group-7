import React from 'react';
import T from 'prop-types';

const List = ({ items }) => (
  <ul>
    {items.map(item => (
      <li key={item.id}>{item.text}</li>
    ))}
  </ul>
);

List.propTypes = {
  items: T.arrayOf(
    T.shape({
      id: T.string.isRequired,
      text: T.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default List;
