import {createElement, Component} from 'react';
import './board.css'; 
import {ConnectedBoardRow} from './boardrow'; 
import {Player, GameState} from '../../store'; 
import { connect } from 'react-redux';

interface BoardProps {
    board: Array<Array<Player>>; 
}

export class Board extends Component<BoardProps,{}> {
    render() {
        console.log(this.props); 
        return (
            <div className="container">
                <ConnectedBoardRow boardRow={this.props.board[0]} row={0} />
                <ConnectedBoardRow boardRow={this.props.board[1]} row={1} />
                <ConnectedBoardRow boardRow={this.props.board[2]} row={2} />
            </div>
        )
    }
}

//mapping Board Props and State board 
function mapStateToBoardProps(state:GameState, ownProp:BoardProps) {
    return {
        board: state.board
    }
}
export let ConnectedBoard = connect<BoardProps, {}, {}>(mapStateToBoardProps)(Board);
