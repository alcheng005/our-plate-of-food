import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="homepage">
        <header>
          <h1>Welcome to Our Plate Of Food!</h1>
        </header>
        <div id="emoji">🍽️</div>
        <Link to={'/room'} style={{ textDecoration: 'none' }}>
          <form>
            <input id="create-button" type="submit" value="Create a Room" />
          </form>
        </Link>
        <Link to={'/room'} style={{ textDecoration: 'none' }}>
          <form>
            <input id="join-button" type="submit" value="Join a Room" />
          </form>
        </Link>
          <form>
            <input name="roomcode" type="text" placeholder="ROOM CODE"></input>
          </form>
      </div>
    );
  }
}

{/* <form method="GET" action='/createroom'> */}
{/* <form method="POST" action='/joinroom'></form> */}

export default Home;
