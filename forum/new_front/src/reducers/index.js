import { combineReducers } from 'redux';

import auth from './auth';
import board from './board';

const reducers = {
    auth,
    board
}

export default combineReducers(reducers)