import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// eslint-disable-next-line no-unused-vars
import reportWebVitals from './reportWebVitals';

const container = document.getElementById('root');

// Create a root
const root = ReactDOM.createRoot(container);

// Render the component in the root
root.render(<App />);