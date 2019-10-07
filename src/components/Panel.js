import React from 'react';

const Panel = ({ title, children }) => (
  <div style={{ border: '1px solid #212121' }}>
    {title && <h1>{title}</h1>}
    {children}
  </div>
);

export default Panel;
