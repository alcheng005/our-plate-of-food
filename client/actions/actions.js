import * as types from '../constants/actionTypes';

export const addLocation = (location) => ({
  type: types.ADD_MARKET,
  payload: location
});

export const removeLocation = (location) => ({
  type: types.REMOVE_LOCATION,
  payload: location,
});
