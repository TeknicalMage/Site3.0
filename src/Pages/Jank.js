import React, { Component } from "react";
import * as ReactDOM from "react-dom";

import logo from './logo.svg';
import fan1 from './Fanpart.png';
import fan2 from './Fanwhole.png';
import './App.css';

class Item extends Component {
  shouldComponentUpdate() {
    return false;
  }
  render() {

    console.log("Hardware Page");
  return (
   
    <div className="App">
   
      <header className="App-header">

      <div className="hide" ><p>cool</p></div>
        
      <img src={fan1} className="The-logo" a/>
      <img src={fan2} className="The-logo2" alt="logo" />
        
       
      </header>
    </div>
  );
}

}
export default Item;
