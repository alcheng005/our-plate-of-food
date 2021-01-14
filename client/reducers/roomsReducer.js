import * as types from '../constants/actionTypes';

const initialState = {
  locations: [],
};

const roomsReducer = (state = initialState, action) => {
  let newLocations;

  switch (action.type) {
    case types.ADD_LOCATION: {
      // if location already exists on the shared room food list, do nothing and
      // return state
      if (state.locations.includes(action.payload)) return { ...state };
      
      newLocations = state.locations.slice();
      newLocations.push(action.payload);

      return {
        ...state,
        locations: newLocations
      };
    }

    case types.REMOVE_LOCATION: {
      newLocations = state.locations.filter((loc) => {
        return loc !== action.payload;
      })

      return {
        ...state,
        locations: newLocations
      };
    }

    default: {
      return state;
    }
  }
};

export default roomsReducer;
