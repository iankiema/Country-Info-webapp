import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './Reducer/store'; // Import your Redux store
import App from './App'; // Import your main App component
import './index.css'; // Import your CSS styles if needed

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
