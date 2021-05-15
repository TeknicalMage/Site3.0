import './App.css';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Nav from "./Nav";
import Apt from "./App"; 
import projects from "./Project"
import videos from "./Video"
import { render } from '@testing-library/react';
import React from 'react';
import ReactDom from 'react-dom'




function routes() {
  return(
      <Router>
            <div className = "App">
             <Nav /> 
               <Switch>
               <Route path ="/videos" component ={videos}/>
               <Route path ="/projects" component ={projects}/>
               </Switch>
            </div>
          </Router>
  );
  

  
} 


//class App extends React.Component{
  
//  render(){
//    return(
//      routes
//    );



//  }



//}





export default App;

