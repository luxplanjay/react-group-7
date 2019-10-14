/* eslint-disable */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Dropdown.module.css';

export default class Dropdown extends Component {
  state = {
    isOpen: false,
  };

  handleToggle = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
    }));
  };

  render() {
    return (
      <div className={styles.container}>
        <button
          type="button"
          className={styles.button}
          onClick={this.handleToggle}
        >
          {/* &#9776; */}
          {this.state.isOpen ? 'Close' : 'Open'}
        </button>

        {this.state.isOpen && (
          <div className={styles.dropdown}>
            <ul className={styles.menu}>
              <li>Option 1</li>
              <li>Option 2</li>
              <li>Option 3</li>
              <li>Option 4</li>
            </ul>
          </div>
        )}
      </div>
    );
  }
}
