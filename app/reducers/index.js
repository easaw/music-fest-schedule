import { combineReducers } from  'redux';
import  acts from './acts.js';
import stages from './stages.js';
import time from './time';

const  scheduleApp = combineReducers({
  acts
  , stages
  , time
});

export default scheduleApp;
