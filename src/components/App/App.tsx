import {createElement, Component} from 'react';
import {Board, ConnectedBoard} from '../Board/board'; 
import styles from './App.css';

export class App extends Component<{}, {}> {
  private test = 5;
  public render() {
    return (<div><div className={styles.App}>Hello {this.test}</div><ConnectedBoard /></div>);
  }
}
