import React, { Component } from 'react';
import Calculator from './Calculator';
import './App.css';

interface AppState {
  isLargeSize: boolean;
}

class App extends Component<any, AppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      isLargeSize: false
    };
  }

  toggleSize(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    this.setState(oldState => {
      return { isLargeSize: !oldState.isLargeSize };
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Simple React Calculator</h1>
        </header>
        <Calculator isLargeSize={this.state.isLargeSize} />
        <footer className="App-footer">
          <button className="App-sizer" onClick={this.toggleSize.bind(this)}>
            {this.state.isLargeSize ? 'Make small' : 'Make large'}
          </button>
        </footer>
      </div>
    );
  }
}

export default App;
