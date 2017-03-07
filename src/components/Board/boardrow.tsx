import {createElement, Component} from 'react';
import './board.css'; 
import {BoardSpot} from './boardspot'; 
import {Player, GameState, UPDATEBOARD, boardReducer} from '../../store'; 
import { connect } from 'react-redux';

interface BoardRowProps {
    boardRow: Array<Player>;
    row: number;  
    play: (row: number, col: number, player: Player) => void; 
}

interface BoardRowInterface {
  boardRow: Array<Player>; 
}

interface BoardRowDispatch {
  play: () => void; 
}

interface BoardRowExtra {
  row: number; 
}

export class BoardRow extends Component<BoardRowProps,{}> {
    render() {
        return (
            <div className="row">
                <BoardSpot onClick={this.props.play(this.props.row, 0, this.props.boardRow[0])} boardSpot={this.props.boardRow[0]} />
                <BoardSpot onClick={this.props.play(this.props.row, 1, this.props.boardRow[1])} boardSpot={this.props.boardRow[1]} />
                <BoardSpot onClick={this.props.play(this.props.row, 2, this.props.boardRow[2])} boardSpot={this.props.boardRow[2]} />
            </div>
        )
    }
}

function mapDispatchToBoardProps(dispatch: boardReducer, ownProp: BoardRowProps) {
    return {
        play: (row: number, col: number, player: Player) => dispatch({ type: UPDATEBOARD, payload: {row, col, player} })
    }
}
function mapStateToBoardProps(state:GameState, ownProp:BoardRowProps) {
    return {
        boardRow: state.board[ownProp.row]
    }
}
export let ConnectedBoardRow = connect<BoardRowInterface, BoardRowDispatch, BoardRowExtra>(mapStateToBoardProps)(BoardRow);
