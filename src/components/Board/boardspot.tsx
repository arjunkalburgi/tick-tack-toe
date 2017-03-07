import {createElement, Component, EventHandler, MouseEvent} from 'react';
import './board.css'; 
import {Player, GameState} from '../../store'; 
import { connect } from 'react-redux';

interface BoardSpotProps {
    boardSpot: Player; 
    onClick: EventHandler<MouseEvent<HTMLDivElement>>;
}

export class BoardSpot extends Component<BoardSpotProps,{}> {
    render() {
        return (<div onClick={this.props.onClick} className="col">{this.props.boardSpot}</div>)
    }
}
