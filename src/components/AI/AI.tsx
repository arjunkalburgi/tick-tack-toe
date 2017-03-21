import {createElement, Component} from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux'; 
import {Player, GameState, UPDATEBOARD} from '../../store'; 

interface AIProps {
  board: Array<Array<Player>>;
  committurn: (row: number, col: number, player: Player) => void; 
  turn: Player; 
}

interface AIInterface {
  board: Array<Array<Player>>;
  turn: Player; 
}

interface AIDispatch {
  committurn: (row: number, col: number, player: Player) => void; 
}



export class AI extends Component<AIProps,{}> {
  taketurn() {
      var row = 0;
      var col = 0;

      this.props.committurn(row, col, Player.AI); 
  }

  componentWillReceiveProps(ownProps: AIProps) {
    if (this.props.turn === Player.USER && ownProps.turn === Player.AI) {
      this.taketurn(); 
    }
  }
  render() {return (<div></div>)}
}

function mapStateToAIProps(state:GameState, ownProp:AIProps) {
    return {
        board: state.board,
        turn: state.turn
    }
}
function mapDispatchToAIProps(dispatch: Dispatch<GameState>, ownProp: AIProps) {
    return {
        committurn: (row: number, col: number, player: Player) => dispatch({ type: UPDATEBOARD, payload: {row, col, player} })
    }
}
export let ConnectedAI = connect<AIInterface, AIDispatch, {}>(mapStateToAIProps, mapDispatchToAIProps)(AI);
