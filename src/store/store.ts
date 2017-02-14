// Imports 
import { createStore, Action, combineReducers } from 'redux';
import { Player } from './player';
import { Difficulty, difficultyReducer } from './difficulty';
import { resultReducer } from './result';
import { finishedReducer } from './finished';
import { turnReducer } from './turn';
import { boardReducer } from './board';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__: Function;
  }
}

//States 
export interface GameState {
  finished: boolean;
  result: Player | 'cats' | null;
  board: Array<Array<Player>>;
  turn: Player;
  difficulty: Difficulty;
}


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

export const store = createStore<GameState>(combineReducers<GameState>({
  finished: finishedReducer,
  result: resultReducer,
  board: boardReducer,
  turn: turnReducer,
  difficulty: difficultyReducer
}), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
