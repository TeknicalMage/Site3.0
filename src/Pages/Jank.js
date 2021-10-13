import React, { Component } from "react";
import * as ReactDOM from "react-dom";

import logo from './Pics/TeknicalMage_OnHover_Logo.png';
import fan1 from './Fanpart.png';
import fan2 from './Fanwhole.png';

import ram from "./Pics/Ram-of-sorts.png"

import desktop from "./Pics/Whole_Desktop_JJ.svg"
import cpu from "./Pics/CPU_Desktop_JJ.svg"
import ssd from "./Pics/SSD_Desktop_JJ.svg"
import gpu from "./Pics/GPU_Desktop_JJ.svg"

import './App.css';
import './Complex_Imagry.css'

var x = 0;

function wack() {
  
  x+=1
  console.log("test");
  console.log(x)
  alert("Hey you have click " + x + " times");

  
}


class Item extends Component {
  shouldComponentUpdate() {
    return false;
  }
  render() {

    console.log("Hardware Page");
  return (
   
    <div className="App">
   
      <header className="App-header">

      
      
    
        

      <div className="test_filter">
    
      </div>




      <div className=""> 
        <img src={desktop} className="bottom_layer" alt="logo" />
      </div>

      
      <div className="hide"> 
        <img src={cpu} className="cpu_layer" alt="logo" />
        <p className="text">AMD CPU with Sad Stock Fan</p>
      </div>

      <div className="hide"> 
        <img src={ssd} className="ssd_layer" alt="logo" />
        <p className="text">250 GB SSD</p>
      </div>



      <div className="hide"> 
        <img src={gpu} className="gpu_layer" alt="logo" />
        <p className="gpu_text">RTX 3080TI</p>
      </div>


    <button onClick={wack}>wow</button>
  
 




      





    
        
       
      </header>
    </div>
  );
}

}
export default Item;
