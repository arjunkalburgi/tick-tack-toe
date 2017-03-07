import {createElement, Component} from 'react';
import './board.css'; 
import {BoardSpot} from './boardspot'; 
import {Player, GameState, UPDATEBOARD} from '../../store'; 
import { connect } from 'react-redux';
import { Dispatch } from 'redux'; 

interface BoardRowProps {
    boardRow: Array<Player>;
    row: number;  
    play: (row: number, col: number, player: Player) => void; 
    turn: Player; 
}

interface BoardRowInterface {
  boardRow: Array<Player>; 
  turn: Player; 
}

interface BoardRowDispatch {
  play: (row: number, col: number, player: Player) => void; 
}

interface BoardRowExtra {
  row: number; 
}

export class BoardRow extends Component<BoardRowProps,{}> {
    foo(index: number) {
      console.log("hi from foo");
      if (this.props.turn === Player.USER) {
        this.props.play(this.props.row, index, this.props.turn)
      }
    }
    render() {
        return (
            <div className="row">
                <BoardSpot onClick={() => this.foo(0)} boardSpot={this.props.boardRow[0]} />
                <BoardSpot onClick={() => this.foo(1)} boardSpot={this.props.boardRow[1]} />
                <BoardSpot onClick={() => this.foo(2)} boardSpot={this.props.boardRow[2]} />
            </div>
        )
    }
}

function mapStateToBoardProps(state:GameState, ownProp:BoardRowProps) {
    return {
        boardRow: state.board[ownProp.row],
        turn: state.turn
    }
}
function mapDispatchToBoardProps(dispatch: Dispatch<GameState>, ownProp: BoardRowProps) {
    return {
        play: (row: number, col: number, player: Player) => dispatch({ type: UPDATEBOARD, payload: {row, col, player} })
    }
}
export let ConnectedBoardRow = connect<BoardRowInterface, BoardRowDispatch, BoardRowExtra>(mapStateToBoardProps, mapDispatchToBoardProps)(BoardRow);
