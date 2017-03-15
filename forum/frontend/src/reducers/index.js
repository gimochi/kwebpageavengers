import { GNUM, FORUMSTATE, GFBOTH } from '../actions';
import {combineReducers} from 'redux';

const initialState = {	
	value: 0,
	diff: 1
}

const Gnum = (state=initialState, action) => {
	switch(action.type) {
		case GNUM:
			return Object.assign({},state,{
				value: action.diff 
			});
		case GFBOTH:
			return Object.assign({},state,{
				value: action.diff_g
			});
		default:
			return state;
	}
}

const ForumState = (state=initialState, action) => {
	switch(action.type) {
		case FORUMSTATE:
			return Object.assign({},state,{
				value: action.diff 
			});
		case GFBOTH:
			return Object.assign({},state,{
				value: action.diff_f
			});
		default:
			return state;
	}
}

const combinedApp = combineReducers({
	Gnum,
	ForumState
});

export default combinedApp;