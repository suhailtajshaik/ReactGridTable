import { combineReducers } from 'redux';

var defaulteState  = require('../data/data.json')

function project(state = defaulteState, action) {
      return state;
}

export default combineReducers({
  project
});
