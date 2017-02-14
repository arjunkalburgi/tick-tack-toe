import {createElement, Component} from 'react';
import {ConnectedBoard} from '../Board/board'; 

export class App extends Component<{}, {}> {
  private test = 5;
  public render() {
    return (<div><div>Hello {this.test}</div><ConnectedBoard/></div>);
  }
}
