import React, { Component } from "react";
import * as ReactDOM from "react-dom";

import logo from './logo.svg';
import './App.css';

class Item extends Component {
  shouldComponentUpdate() {
    return false;
  }
  render() {

    console.log("Videos");
  return (
   
    <div className="App">
   
      <header className="App-header">
        
        <iframe width="560" height="315" src="https://www.youtube.com/embed/5fMNITQ2Q-c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        
        <a
          href='https://www.youtube.com/watch?v=5fMNITQ2Q-c'
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

}
export default Item;
