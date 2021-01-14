import * as types from '../constants/actionTypes';
// const models = require('../../server/models/mainModels.js');

// async function getRoomList () {
//   const roomList = await models.Room.find({}).exec();
//   console.log('roomList:', roomList);
//   return roomList;
// }

// const testArr = getRoomList();

const initialState = {
  locations: ['(List is empty, add something!)'],
  items: 0
};

const roomsReducer = (state = initialState, action) => {
  let newLocations;
  let newItemAmt;

  switch (action.type) {
    case types.ADD_LOCATION: {
      // if location already exists on the shared room food list, do nothing and
      // return state
      if (state.locations.includes(action.payload)) {
        alert('This already exists on your plate');
        return state;
      }
      if (action.payload === '') return state;
      
      if (state.locations[0] === '(List is empty, add something!)') newLocations = [];
      else newLocations = state.locations.slice();
      
      newLocations.push(action.payload);
      newItemAmt = state.items + 1;

      return {
        ...state,
        locations: newLocations,
        items: newItemAmt
      };
    }

    case types.REMOVE_LOCATION: {
      if (action.payload === '') return state;
      // if location does not exist on the list, return state
      if (!state.locations.includes(action.payload)) {
        alert('This does not exist on your plate');
        return state;
      }

      newLocations = state.locations.filter((loc) => {
        return loc !== action.payload;
      })

      newItemAmt = state.items - 1;

      return {
        ...state,
        locations: newLocations,
        items: newItemAmt
      };
    }

    default: {
      return state;
    }
  }
};

export default roomsReducer;
