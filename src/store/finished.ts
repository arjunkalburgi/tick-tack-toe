import { Action } from 'redux';

export const UPDATEFINISHED = "UPDATEFINISHED";

export interface FinishedAction extends Action {
	payload: boolean;
}

export function finishedReducer(state: boolean = false, action: FinishedAction): boolean {
	if (action.type == "UPDATEFINISHED") {
		return action.payload; 
	}
	return state; 
}
