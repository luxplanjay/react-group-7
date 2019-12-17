import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import AuthProvider from './components/context/auth/AuthProvider';
import './index.css';

ReactDOM.render(
  <AuthProvider>
    <App />
  </AuthProvider>,
  document.getElementById('root'),
);
