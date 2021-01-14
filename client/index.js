import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './App.jsx';
// import './style.css';

render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('app'),
);

// render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>,
//   document.getElementById('app'),
// );

// import React from 'react';
// import { render } from 'react-dom';
// import { Provider } from 'react-redux';
// import App from './App.jsx';
// import store from './store';

// render(
//   // wrap the App in the Provider and pass in the store
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('contents')
// );

