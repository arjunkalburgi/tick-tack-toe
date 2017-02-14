import { Action } from 'redux';
import { Player } from './player';

export const CHANGETURN = "CHANGETURN"

export interface TurnAction extends Action {
	payload: Player;
}

export function turnReducer(state: Player = Player.USER, action: TurnAction): Player {
	if (action.type == CHANGETURN) {
		if (state == Player.USER) {
			return Player.AI; 
		} else {
			return Player.USER; 
		}
	}
	return state; 
}
