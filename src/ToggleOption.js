import React, { Component } from 'react';
import './App.css';

class ToggleOption extends Component {

  constructor(props){
    super(props);
    this.selectedValue = props.selectedValue;
  }

  render() {
    const normalStyle = {
      padding: '0px 10px',
      height: "42px",
      "min-width": "72px",
      "background-color": "rgba(204, 204, 204, 0.25)",
      border: "0px",
    };
    if(this.props.active === true){
      console.log("we are on to something")
      return (
        <button className="ActiveButton">
        {this.props.option}
        </button>
      );
    }
    return (
      <button className="NormalButton">
      {this.props.option}
      </button>
    );
  }
}

export default ToggleOption;
