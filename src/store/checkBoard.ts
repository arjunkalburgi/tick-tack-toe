import { SETDIFFICULTY } from './difficulty';
import { UPDATEBOARD } from './board';
import { UPDATEFINISHED } from './finished';
import { UPDATERESULT } from './result';
import { CHANGETURN } from './turn';
import { Player } from './player';
import { MiddlewareAPI, Dispatch, Action } from 'redux'; 
import { GameState } from './store';

export const checkBoard = (store: MiddlewareAPI<GameState>) => (next: Dispatch<GameState>) => (action: Action) => {
	// if (action.type == SETDIFFICULTY) {
	// 	next(action); 
	// }

	// if (action.type == UPDATEBOARD) {
	// 	next(action); 
	// }
	next(action);


	// check the board for line of 3
	console.log("hey baby"); 
	var winner = checkWin(); //returns null if no winner (Player|'cats'|null)

	if (winner) {
		var finishedAction = { type: UPDATEFINISHED, payload: true }; 
		next(finishedAction); 

		// winner = Player|'cats'|null;
		var resultAction = { type: UPDATERESULT, payload: {winner} }
		next(resultAction); 
	} else {
		if (store.getState().turn = Player.USER) {
			var changeAction = { type: CHANGETURN, payload: Player.AI}
			next(changeAction); 
		} else {
			var changeAction = { type: CHANGETURN, payload: Player.USER}
			next(changeAction); 
		}
	}

}

function checkWin() {
	return null; 
}

/*difficultyReducer

boardReducer - user 

(checks finished)
	if finished: 
		finishedReducer
		resultReducer
	else: 
		turnReducer
		(AI Update)

(AI update)
	AI input
	boardReducer - AI
	(checks finished)*/