  import './App.css';

  import Nav from "./Nav";

  import { BrowserRouter as Router, Switch, Route, NavLink, Link } from "react-router-dom";


  import Apt from "./App"; 
  import { render } from '@testing-library/react';
  import React from 'react';
  import ReactDom from 'react-dom'


  //Transition stuff


  import PageTransition from 'react-router-page-transition';


  //Transition stuff



  import projects from "./Pages/Project"
  import videos from "./Pages/Video"
  import Home from "./Pages/Homepage"
  import Contact from './Pages/Contact';
  import jank from "./Pages/Jank"


  





  class App extends React.Component{
    
    render() {
      return(
        <div className = "App">
          <Router>
      
          
          <Nav>
          </Nav>
      
            
          <PageTransition timeout={500}>
          <Switch location={this.props.location}>
              <Route path ="/videos" component ={videos}/>
              <Route path ="/projects" component ={projects}/>
              <Route path ="/jank" component ={jank}/>
              <Route path ="/Contact" component ={Contact}/>
              <Route path ="/homepage" component ={Home}/>
              <Route path ="/" component ={Home}/>
            </Switch>
          </PageTransition>
            
      
          </Router>
          <div>
        
            </div>   
        </div>

     

        
      
        
      )
    }

  }


  export default App;

