import React from 'react';
import PropTypes from 'prop-types';

const Modal = ({ children }) => (
  <div className="Backdrop">
    <div className="Modal">{children}</div>
  </div>
);

Modal.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Modal;
