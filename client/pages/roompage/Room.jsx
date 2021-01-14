import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions.js';

const mapDispatchToProps = (dispatch) => ({
  addLocation: (loc) => { dispatch(actions.addLocation(loc)) },
  removeLocation: (loc) => { dispatch(actions.removeLocation(loc)) }
});

class Room extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        Sup Homie
      </div>
    );
  }
}

// class App extends Component {
//   constructor(props) {
//     super(props);
//   }
  
//   render() {
//     return(
//       <div>
//         <form method="GET" action='/createroom'>
//           <input id="create-button" type="submit" value="Create a Room" />
//         </form>
//         <form method="POST" action='/joinroom'>
//           <input id="join-button" type="submit" value="Join a Room" />
//           <br />
//           <input name="roomcode" type="text" placeholder="ROOM CODE"></input>
//         </form>
//       </div>
//     );
//   }
// }

export default connect(null, mapDispatchToProps)(Room);