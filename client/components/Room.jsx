import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import socketClient  from "socket.io-client";
const SERVER = "http://localhost:8080";

import Location from './Location.jsx';
import * as actions from '../actions/actions.js';

const mapStateToProps = (state) => ({
  roomLocs: state.rooms.locations,
  itemsOnList: state.rooms.items,
});

const mapDispatchToProps = (dispatch) => ({
  addLocation: (loc) => { dispatch(actions.addLocation(loc)) },
  removeLocation: (loc) => { dispatch(actions.removeLocation(loc)) },
});

class Room extends Component {
  constructor(props) {
    super(props);

    this.state = {
      itemLoc: [],
      numItems: 0
    }
    
    this.configSocket = this.configSocket.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }
  
  componentDidMount() {
    this.configSocket();
  }
  
  configSocket() {
    const socket = socketClient(SERVER);

    socket.on('connection', (sharedLocList, numOfItems) => {
      console.log('I got connected to the backend');
      this.setState({
        ...this.state,
        itemLoc: sharedLocList,
        numItems: numOfItems
      });
    });

    socket.on('refresh-list', (sharedLocList, numOfItems) => {
      console.log('I received a refresh-list');
      console.log('sharedLocList in refresh-list', sharedLocList);
      // const updatedList = this.props.roomLocs;
      // console.log('updatedList after refresh-list:', updatedList);
      this.setState({
        ...this.state,
        itemLoc: sharedLocList,
        numItems: numOfItems
      });
    });
  }

  handleAdd() {
    const newLoc = document.getElementById('addItem').value;
    const socket = socketClient(SERVER);
    // this.props.addLocation(newLoc);
    document.getElementById('addItem').value = '';
    socket.emit('add-item', newLoc);
  }

  handleRemove() {
    const locToRemove = document.getElementById('removeItem').value
    const socket = socketClient(SERVER);
    // this.props.removeLocation(locToRemove);
    document.getElementById('removeItem').value = '';
    socket.emit('remove-item', locToRemove);
  }

  render() {
    const locList = this.state.itemLoc.map((loc, index) => {
      return <Location key={`loc #${index}`} locName={loc} />
    });

    return (
      <div id="roompage">
        <header>
          <h2>Room: FAKE</h2>
        </header>
        <section id="add-remove-buttons">
          <div id="add-button">
            <button onClick={this.handleAdd}>Add item</button>
            <input type='text' id='addItem' />
          </div>
          <div id="remove-button">
            <button onClick={this.handleRemove}>Remove item</button>
            <input type='text' id='removeItem' />
          </div>
        </section>
        <h3>Your Plate of Food:</h3>
        <div id="room-loc-list">
          {locList}
        </div>
        {this.state.numItems > 0 && 
          <Link to="/room/vote">
            <button id="go-to-vote-button">Take Us to Vote</button>
          </Link>
        }
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Room);
