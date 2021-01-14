import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
// import { BrowserRouter } from 'react-router-dom';
  // for future: websockets?
import Room from './Room.jsx';
import store from '../../store.js';
import '../../style.css';

render(
  <Provider store={store}>
    <Room />
  </Provider>,
  document.getElementById('roompage'),
);
