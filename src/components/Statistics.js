import React from 'react';
// import withLog from './hoc/withLog';
// import withBorder from './hoc/withBorder';
import withToggle from './hoc/withToggle';

const Statistics = ({ items }) => (
  <section className="statistics">
    <ul className="stat-list">
      {items.map(({ id, label, percentage }) => (
        <li className="item" key={id}>
          <span className="label">{label}: </span>
          <span className="percentage">{percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);

export default withToggle(Statistics);
