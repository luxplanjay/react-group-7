import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Button from '../Button';
import './List.css';
import './pop-transition.css';
import './slide-transition.css';

const List = ({ items, onDelete }) => (
  <TransitionGroup component="ul" className="List">
    {items.map(item => (
      <CSSTransition key={item.id} timeout={250} classNames="slide">
        <li className="List-item">
          {item.text}
          <Button label="Delete" onClick={() => onDelete(item.id)} />
        </li>
      </CSSTransition>
    ))}
  </TransitionGroup>
);

export default List;
