import React from 'react';
import { CSSTransition } from 'react-transition-group';
import Button from './Button';
import './Sidebar.css';

export default function Sidebar({ isOpen, onClose }) {
  return (
    <CSSTransition in={isOpen} timeout={250} unmountOnExit classNames="Sidebar">
      <div className="Sidebar">
        <Button label="Close" onClick={onClose} />
      </div>
    </CSSTransition>
  );
}
