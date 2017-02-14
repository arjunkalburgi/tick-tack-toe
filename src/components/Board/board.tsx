import {createElement, Component} from 'react';
import './board.css'; 
import {Player, GameState} from '../../store'; 
import { connect } from 'react-redux';

interface BoardProps {
    board: Array<Array<Player>>; 
}

export class Board extends Component<BoardProps,{}> {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">{this.props.board[0][0]}</div>
                    <div className="col">{this.props.board[0][1]}</div>
                    <div className="col">{this.props.board[0][2]}</div>
                </div>
                <div className="row">
                    <div className="col">{this.props.board[1][0]}</div>
                    <div className="col">{this.props.board[1][1]}</div>
                    <div className="col">{this.props.board[1][2]}</div>
                </div>
                <div className="row">
                    <div className="col">{this.props.board[2][0]}</div>
                    <div className="col">{this.props.board[2][1]}</div>
                    <div className="col">{this.props.board[2][2]}</div>
                </div>
            </div>
        )
    }
}

// mapping Board Props and State board 
function mapStateToBoardProps(state:GameState, ownProp:BoardProps) {
    return {
        board: state.board
    }
}
let boardFactory = connect(() => mapStateToBoardProps, {});
export let ConnectedBoard = boardFactory(Board);
