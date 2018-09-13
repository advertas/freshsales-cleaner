import React, { Component } from 'react';
// import TradingView from './tv';

import Graph from "./Graph";
import TradingViewWidget from 'react-tradingview-widget';
import logo from './logo.svg';
import './App.css';

class Chart extends Component {

  get chartContainer(): React.Node {
    const activeStyle = {
      margin: '40px',
      border: '5px solid rgb(77, 188, 21)',
      height: '500px'
    };

    const timeframe = this.props.timeframe

    let interval;
    console.log("timeframe:", timeframe)
    if(timeframe == "day"){
      interval = "D";
    }else if(timeframe == "week"){
      interval = "W"
    }else if(timeframe == "month"){
      interval = "M"
    }

    const symbol = "NASDAQ:"+this.props.symbol;
    console.log(symbol);
    return (
      <div style={activeStyle}>
      <TradingViewWidget
        interval={interval}
        symbol={symbol}
        locale="en"
        autosize
      />
      </div>
    )
  };




  render() {
    return (
      <div className="App">
        {this.chartContainer}
      </div>
    );
  }
}

export default Chart;
