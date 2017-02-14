// Imports 
import { createStore, Action, combineReducers } from 'redux';

declare global {
	interface Window {
		__REDUX_DEVTOOLS_EXTENSION__: Function;
	}
}

// Vars
enum Player {
	USER, 
	AI
}
enum Difficulty {
	EASY, 
	MEDIUM, 
	HARD
}

//States 
interface GameState {
	finished: boolean;
	result: Player|'cats'|null;
	board: Array<Array<Player>>;
	turn: Player; 
	difficulty: Difficulty;
}

// Action vars
const CHANGETURN = "CHANGETURN"
const UPDATEBOARD = "UPDATEBOARD" //????
const UPDATEFINISHED = "UPDATEFINISHED"
const UPDATERESULT = "UPDATERESULT"
const CLEARBOARD = "CLEARBOARD" 
const SETDIFFICULTY = "SETDIFFICULTY"

//Actions on State (reducer)
	// place a x or o (p1, p2) 
		// update GameState.board as a BoardSpace
		// alternate GameState.turn
			// AI turn
				// minimax AI move (dispatch -> places (above))
	// if game is over
		// GameState.finished = true
		// GameState.result = something
	// when GameState.finished == true and new game button/action pressed
		// clear board, reset difficulty, reset who is p1/p2, reset result and finished
		// reset BoardSpaces occupied and occupiedBy
interface DifficultyAction extends Action {
	payload: Difficulty; 
}
function difficultyReducer(state: Difficulty = Difficulty.EASY, action: DifficultyAction): Difficulty {
	if (action.type == "SETDIFFICULTY") {
		return action.payload; 
	}
	return state; 
}

interface ResultAction extends Action {
	payload: Player|'cats'|null;
}
function resultReducer(state: Player|'cats'|null = null, action: ResultAction): Player|'cats'|null {
	if (action.type == "UPDATERESULT") {
		return action.payload; 
	}
	return state; 
}

interface FinishedAction extends Action {
	payload: boolean;
}
function finishedReducer(state: boolean = false, action: FinishedAction): boolean {
	if (action.type == "UPDATEFINISHED") {
		return action.payload; 
	}
	return state; 
}

interface TurnAction extends Action {
	payload: Player;
}
function turnReducer(state: Player = Player.USER, action: TurnAction): Player {
	if (action.type == "CHANGETURN") {
		if (state == Player.USER) {
			return Player.AI; 
		} else {
			return Player.USER; 
		}
	}
	return state; 
}

interface BoardAction extends Action {
	payload: {row: number, col: number, player: Player}; 
}
function boardReducer(state: Array<Array<Player>> = [[],[],[]], action: BoardAction): Array<Array<Player>> {
	if (action.type == "CLEARBOARD") {
		return [[],[],[]];
	}
	if (action.type == "UPDATEBOARD") {
		var board: Array<Array<Player>> = [[],[],[]]; 
		board = [[...state[0]],[...state[1]],[...state[2]]]; 
		board[action.payload.row][action.payload.col] = action.payload.player; 
		return board; 
	}
	return state;
}

const reducers = combineReducers({finished: finishedReducer, result: resultReducer, board: boardReducer, turn: turnReducer, difficulty: difficultyReducer})
export const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
console.log(window.__REDUX_DEVTOOLS_EXTENSION__); 