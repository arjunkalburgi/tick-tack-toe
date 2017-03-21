import {createElement, Component} from 'react';
import './board.css'; 
import {ConnectedBoardRow} from './boardrow'; 
import {ConnectedAI} from '../AI/AI'; 
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
                <ConnectedBoardRow row={0} />
                <ConnectedBoardRow row={1} />
                <ConnectedBoardRow row={2} />
                <ConnectedAI />
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
