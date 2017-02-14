import {createElement, Component} from 'react';
import './board.css'; 
import {Player, GameState} from '../../store'; 
import { connect } from 'react-redux';

interface BoardSpotProps {
    boardSpot: Player; 
}

export class BoardSpot extends Component<BoardSpotProps,{}> {
    render() {
        return (<div className="col">{this.props.boardSpot}</div>)
    }
}
