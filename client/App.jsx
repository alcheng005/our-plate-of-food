import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
// import { connect } from 'react-redux';
// import * as actions from './actions/actions.js';

import Home from './components/Home.jsx';
import Room from './components/Room.jsx';
import Vote from './components/Vote.jsx';

import './style.css';

// const mapDispatchToProps = (dispatch) => ({
//   addLocation: (loc) => { dispatch(actions.addLocation(loc)) },
//   removeLocation: (loc) => { dispatch(actions.removeLocation(loc)) }
// });

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="router">
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/room" component={Room} />
            <Route exact path="/room/vote" component={Vote} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
