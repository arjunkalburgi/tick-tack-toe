import { Action } from 'redux';

export const SETDIFFICULTY = "SETDIFFICULTY"

export enum Difficulty {
	EASY, 
	MEDIUM, 
	HARD
};

export interface DifficultyAction extends Action {
	payload: Difficulty; 
}

export function difficultyReducer(state: Difficulty = Difficulty.EASY, action: DifficultyAction): Difficulty {
	if (action.type == SETDIFFICULTY) {
		return action.payload; 
	}
	return state; 
}
