import { Action } from 'redux';
import { Player } from './player';

export const UPDATEBOARD = "UPDATEBOARD";
export const CLEARBOARD = "CLEARBOARD";

export interface BoardAction extends Action {
	payload: {row: number, col: number, player: Player}; 
}

export function boardReducer(state: Array<Array<Player>> = [[],[],[]], action: BoardAction): Array<Array<Player>> {
	console.log("dispatched"); 
  if (action.type == CLEARBOARD) {
		return [[],[],[]];
	}
	if (action.type == UPDATEBOARD) {
		var board: Array<Array<Player>> = [[],[],[]]; 
		board = [[...state[0]],[...state[1]],[...state[2]]]; 
		board[action.payload.row][action.payload.col] = action.payload.player; 
		return board; 
	}
	return state;
}
