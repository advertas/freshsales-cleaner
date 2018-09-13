import React, { Component } from 'react';
import ToggleOption from './ToggleOption';
import logo from './logo.svg';
import './App.css';

class Toggle extends Component {

  constructor(props){
    super(props);
  }

  selectOption = (option) => {
    console.log(option)
    //if timeframe
    if(this.props.updateTimeframe){
      this.props.updateTimeframe(option)
    }else {
      this.props.updateSymbol(option)
    }

  }
  render() {

    let selected = true;
    const style = {
      "background-color": "rgba(204, 204, 204, 0.25)",
    }

    const options = this.props.options.map(option => {
      return (
        <menu-select
            onClick={() => this.selectOption(option)}
            style={style}>
          <ToggleOption option={option} active={this.props.selectedValue === option}/>
        </menu-select>
      )
    })
    return (
      <div className="Toggle">
      {options}
      </div>
    );
  }
}

export default Toggle;
