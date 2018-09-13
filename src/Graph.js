import React, { Component } from 'react';
import ChartHeader from "./ChartHeader";
import logo from './logo.svg';
import './App.css';


class Graph extends Component {
  render() {
    return (
      <div className="App">
        <header >
          <h1 className="App-title">Campaign Analytics</h1>
        </header>
        <ChartHeader />
      </div>
    );
  }
}

export default Graph;
