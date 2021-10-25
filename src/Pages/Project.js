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
          Hey, My name is Julian and I setup this website to display the different things I've devloped outside of my fulltime IT Job.
          <br></br>
          My currently favorite Languages to work in include python and c++, but I'd addtionally consider myself competent in java and go.
          <br></br>
          Around late 2019 I started taking on small jobs online, and since then it has ballooned into a small side business that I'm  looking to better organize and expand
          <br></br>
          If you are still interested, check out some of things I've previously made and currently working on.
          <br></br>

        </p>



        <ul className = 'linefx'>
        <div className = 'proj-grid-container'>
        <a href="https://github.com/TeknicalMage/Site2.0" target="_blank">
        <li>
        <img className = 'proj-grid-item' src = "https://pm-site-assets-py4.s3.us-east-2.amazonaws.com/products/legacy/black_70_sq1_250.jpg"/>
        </li>
        </a>
        <li className = 'container'> 
        
        <img className = 'centered' src = {sitetitle}/>
        
        <a href="https://www.youtube.com/channel/UCJX45kFidKwVbLgH25H_USw" target="_blank">
        <img className = 'proj-grid-item' src = {Site2Cover}/>
        </a>
        </li>
        </div>
        </ul>
        
        <ul className = 'linefx'>
        <div className = 'proj-grid-container'>
      
        <a href="https://www.youtube.com/channel/UCJX45kFidKwVbLgH25H_USw" target="_blank">
        <li className = 'container'>
        <img className = 'centered-secondary' src = {discord2Cover}/>
        <img className = 'proj-grid-item' src = "https://pm-site-assets-py4.s3.us-east-2.amazonaws.com/products/legacy/black_70_sq1_250.jpg"/>
        </li>
        </a>

        <a href="https://www.youtube.com/channel/UCJX45kFidKwVbLgH25H_USw" target="_blank">
        <li> 
        <img className = 'proj-grid-item' src = "https://pm-site-assets-py4.s3.us-east-2.amazonaws.com/products/legacy/black_70_sq1_250.jpg"/>
        </li>
        </a>
        </div>
        </ul>

      </header>
    </div>
  );
}

}

export default Item;
