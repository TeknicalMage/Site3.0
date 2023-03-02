import React, { Component } from "react";
import * as ReactDOM from "react-dom";

import logo from './logo.svg';
import sitetitle from './Project-Pics/Site_Title.gif'
import './App.css';
import './Project.css'


/*Project Pics*/
import Site2Cover from "./Project-Pics/Site2jif.gif";
import discord2Cover from "./Project-Pics/Discord_Title.gif";
/*Project Pics*/

class Item extends Component {
  shouldComponentUpdate() {
    return false;
  }
  render() {

    console.log("Hardware Page");
  return (
   
    <div className="App">
      <header className="App-header">
      
        <p className = "p-custom">
          Work in progress resume
          <br></br>
          Check it out
        </p>

       
       
       
       

        <div class="parent">
        <div class="div2">
          VT Project
        </div>
        <div class="div3">
          Oroborus Cascade 
        </div>
        <div class="div4">
          Car Part Picker II
          </div>
        <div class="div5">
          Unity Game
          </div>
        <div class="div6">
           Car Part Picker II
           </div>
        <div class="div7">
          -
         </div>
        </div>
        
        




      </header>
    </div>
  );
}

}

export default Item;
