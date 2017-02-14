import {createElement, Component} from 'react';
import './board.css'; 
import {BoardSpot} from './boardspot'; 
import {Player, GameState} from '../../store'; 
import { connect } from 'react-redux';

interface BoardRowProps {
    boardRow: Array<Player>; 
}

export class BoardRow extends Component<BoardRowProps,{}> {
    render() {
        return (
            <div className="row">
                <BoardSpot boardSpot={this.props.boardRow[0]} />
                <BoardSpot boardSpot={this.props.boardRow[1]} />
                <BoardSpot boardSpot={this.props.boardRow[2]} />
            </div>
        )
    }
}
