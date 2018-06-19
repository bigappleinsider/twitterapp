import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import twitterReducer from './twitterReducer';

export default combineReducers({
  routing: routerReducer,
  twitterReducer,
});