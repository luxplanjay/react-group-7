import React from 'react';
import { CSSTransition } from 'react-transition-group';
import './Header.css';

export default function Header() {
  return (
    <CSSTransition in={true} timeout={500} appear classNames="Header">
      <header className="Header">Header</header>
    </CSSTransition>
  );
}
