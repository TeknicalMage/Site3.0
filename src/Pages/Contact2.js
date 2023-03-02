import './App.css';
import DOMPurify from "dompurify";

import React, { Component } from 'react';

const html = require("./output1.html");

var htmlDoc = {__html: html};

export default class Doc extends Component {
  constructor(props){
    super(props);
  }

  render(){
     return (<div dangerouslySetInnerHTML={htmlDoc} />)}
        }




