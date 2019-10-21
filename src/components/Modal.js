import React, { Component, createRef } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import styles from './Modal.module.css';

const MODAL_ROOT = document.querySelector('#modal-root');

export default class Modal extends Component {
  static propTypes = {
    // https://github.com/yannickcr/eslint-plugin-react/issues/7
    children: PropTypes.node.isRequired,
    onClose: PropTypes.func.isRequired,
  };

  backdropRef = createRef();

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress = e => {
    console.log(e);

    if (e.code !== 'Escape') {
      return;
    }

    this.props.onClose();
  };

  handleBackdropClick = e => {
    if (this.backdropRef.current && e.target !== this.backdropRef.current) {
      return;
    }

    this.props.onClose();
  };

  render() {
    const { children } = this.props;

    // https://github.com/evcohen/eslint-plugin-jsx-a11y/issues/91
    return createPortal(
      <div
        className={styles.backdrop}
        ref={this.backdropRef}
        onClick={this.handleBackdropClick}
        role="presentation"
      >
        <div className={styles.modal}>{children}</div>
      </div>,
      MODAL_ROOT,
    );
  }
}
