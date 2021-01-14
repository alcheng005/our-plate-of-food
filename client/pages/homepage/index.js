import React from 'react';
import { render } from 'react-dom';
// import { BrowserRouter } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import store from './store';
import '../../style.css';

render(
  <div>
    <header>
      <h1>Welcome to Our Plate Of Food!</h1>
    </header>
    <form method="GET" action='/createroom'>
      <input id="create-button" type="submit" value="Create a Room" />
    </form>
    <form method="POST" action='/joinroom'>
      <input id="join-button" type="submit" value="Join a Room" />
      <br />
      <input name="roomcode" type="text" placeholder="ROOM CODE"></input>
    </form>
  </div>,
  document.getElementById('homepage'),
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

