import React, { Component } from 'react';
import TradingViewWidget from 'react-tradingview-widget';
import './App.css';

class Chart extends Component {

  get chartContainer(): React.Node {
    const chartStyle = {
      margin: '40px',
      border: '5px solid rgb(77, 188, 21)',
      height: '500px'
    };

    const timeframe = this.props.timeframe;

    //lets set the interval
    let interval;
    console.log("timeframe:", timeframe)
    if(timeframe === "day"){
      interval = "D";
    }else if(timeframe === "week"){
      interval = "W"
    }else if(timeframe === "month"){
      interval = "M"
    }

    //lets set the symbol
    const symbol = "NASDAQ:"+this.props.symbol;
    return (
      <div style={chartStyle}>
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
