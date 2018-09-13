import React, { Component } from 'react';
import Chart from './Chart';
import Toggle from "./Toggle";
import './App.css';

//our parent class that holds the state
class ChartHeader extends Component {
  constructor(props){
    super(props);

    this.state = {
      timeframe: 'max',
      symbol: 'AAPL',
    }
    this.updateTimeframe = this.updateTimeframe;
  }

  updateTimeframe = (timeframe) => {
    this.setState({ timeframe })

  }
  updateSymbol= (symbol) => {
    this.setState({ symbol })

  }

  get timeframe(): React.Node {
    const { timeframe } = this.state;
    const timeframes = ["day", "week", "month"];
        return <Toggle
          options={timeframes}
          updateTimeframe={this.updateTimeframe}
          selectedValue={timeframe} />;
  }

  get symbol(): React.Node {
    const { symbol } = this.state;
    const symbols = ["AAPL", "TSLA", "PYPL"];
        return <Toggle
          options={symbols}
          updateSymbol={this.updateSymbol}
          selectedValue={symbol} />;
  }

  render() {
    return (
      <div>
        {this.symbol}
        {this.timeframe}
        <Chart timeframe={this.state.timeframe} symbol={this.state.symbol}/>

      </div>
    );
  }
}

export default ChartHeader;
