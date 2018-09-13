import React, { Component } from 'react';
import ToggleOption from './ToggleOption';
import './App.css';

class Toggle extends Component {

  selectOption = (option) => {
    console.log(option)
    //if timeframe call the updateTimeframe function
    if(this.props.updateTimeframe){
      this.props.updateTimeframe(option)
    }else {
      this.props.updateSymbol(option)
    }

  }
  render() {
    const style = {
      "background-color": "rgba(204, 204, 204, 0.25)",
    }

    //could not figure out how to use onChange so I used onClick instead
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
