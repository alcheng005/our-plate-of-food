import { combineReducers } from 'redux';
import roomsReducer from './roomsReducer';

const reducers = combineReducers({
  rooms: roomsReducer,
});

export default reducers;
