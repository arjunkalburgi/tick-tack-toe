import {createElement, Component} from 'react';
import './board.css'; 
import {BoardRow} from './boardrow'; 
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
                <BoardRow boardRow={this.props.board[0]} />
                <BoardRow boardRow={this.props.board[1]} />
                <BoardRow boardRow={this.props.board[2]} />
            </div>
        )
    }
}

// mapping Board Props and State board 
// function mapStateToBoardProps(state:GameState, ownProp:BoardProps) {
//     return {
//         board: state.board
//     }
// }
// let boardFactory = connect(mapStateToBoardProps);
// export let ConnectedBoard = boardFactory(Board);
