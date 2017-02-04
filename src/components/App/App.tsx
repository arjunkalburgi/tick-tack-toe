import {createElement, Component} from 'react';

export class App extends Component<{}, {}> {
  private test = 5;
  public render() {
    return (<div>Hello {this.test}</div>);
  }
}