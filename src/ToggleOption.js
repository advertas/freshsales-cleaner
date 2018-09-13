import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class ToggleOption extends Component {

  constructor(props){
    super(props);
    this.selectedValue = props.selectedValue;
  }

  render() {
    const activeStyle = {
      "border-radius": '12px',
      padding: '0px 10px',
      height: "21px",
      "min-width": "72px",
      "background-color": "#4dbc15",
      border: "0px",
    };
    const normalStyle = {
      padding: '0px 10px',
      height: "21px",
      "min-width": "72px",
      "background-color": "rgba(204, 204, 204, 0.25)",
      border: "0px",


    };
    if(this.props.active == true){
      console.log("we are on to something")
      return (
        <button className="App" style={activeStyle}>
        {this.props.option}
        </button>
      );
    }
    return (
      <button className="App" style={normalStyle}>
      {this.props.option}
      </button>
    );
  }
}

export default ToggleOption;
