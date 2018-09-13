import React, { Component } from 'react';
import Chart from './Chart';
import Toggle from "./Toggle";
import logo from './logo.svg';
import './App.css';



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

  componentDidUpdate() {

    console.log("state : ", this.state)


  }

//   setChartType = (type: ChartType) => {
//     const { candlesStore } = this.props;
//
//     track('chart_chart_type_selected', { chart_type: type });
//
//     this.chartTypeStore.hide();
//     candlesStore.setType(type);
// };

get timeframe(): React.Node {
    const { timeframe } = this.state;
    const timeframes = ["day", "week", "month"];
    //
    // if (timeframe === 'max') {
        return <Toggle
          options={timeframes}
          updateTimeframe={this.updateTimeframe}
          selectedValue={timeframe} />;
    // return tab === 'price' ? <PriceChart /> : <DepthChart />;
}

get symbol(): React.Node {
    const { symbol } = this.state;
    const symbols = ["AAPL", "TSLA", "PYPL"];
    //
    // if (timeframe === 'max') {
        return (
          <div>
          <Toggle
          options={symbols}
          updateSymbol={this.updateSymbol}
          selectedValue={symbol} />
          </div>
          );
    // return tab === 'price' ? <PriceChart /> : <DepthChart />;
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
