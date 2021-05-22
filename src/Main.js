  import './App.css';

  import Nav from "./Nav";

  import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


  import Apt from "./App"; 
  import { render } from '@testing-library/react';
  import React from 'react';
  import ReactDom from 'react-dom'

  import projects from "./Pages/Project"
  import videos from "./Pages/Video"
  import Homeinfo from "./Homeinfo"

  

  

  




  class App extends React.Component{
    
    render() {
      return(
        <div className = "App">
          <Router>
            <Nav />
            <Switch>
            <Route path ="/videos" component ={videos}/>
            <Route path ="/projects" component ={projects}/>
            </Switch>
          </Router>
          <div>
            <Homeinfo />
            </div>   
        </div>

     

        
      
        
      )
    }

  }


  export default App;

