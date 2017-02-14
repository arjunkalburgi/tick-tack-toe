import { Action } from 'redux';
import { Player } from './player';


export const UPDATERESULT = "UPDATERESULT";

export interface ResultAction extends Action {
	payload: Player|'cats'|null;
}

export function resultReducer(state: Player|'cats'|null = null, action: ResultAction): Player|'cats'|null {
	if (action.type == UPDATERESULT) {
		return action.payload; 
	}
	return state; 
}
