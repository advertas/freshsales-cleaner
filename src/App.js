import React, { Component } from 'react';
import ChartHeader from './ChartHeader';
import houzz from './houzz.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App App-bg">
        <header className="App-header">
          <img src={houzz} className="App-logo" alt="logo" />
          <h1 className="App-title">Campaign Analytics</h1>
        </header>
        <p className="App-intro">
          <code>1st line chages symbol</code>
        </p>
        <p className="App-intro">
          <code>2nd line chages duration</code>
        </p>
        <ChartHeader />
      </div>
    );
  }
}

export default App;
