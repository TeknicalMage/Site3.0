  import './App.css';

  import Nav from "./Nav";

  import { BrowserRouter as Router, Switch, Route, NavLink, Link } from "react-router-dom";


  
  import { render } from '@testing-library/react';
  import React from 'react';
  import ReactDom from 'react-dom'

  import { initializeApp } from "firebase/app";
  import { getAnalytics } from "firebase/analytics";


  import projects from "./Pages/Project"
  import videos from "./Pages/Video"
  import Home from "./Pages/Homepage"
  import Contact from './Pages/Contact';
  import jank from "./Pages/Jank"

  const firebaseConfig = {
    apiKey: "AIzaSyB89k20LvWqTgmzjb6iJbV0ggN_tbiE4h0",
    authDomain: "site2-0.firebaseapp.com",
    projectId: "site2-0",
    storageBucket: "site2-0.appspot.com",
    messagingSenderId: "506496275301",
    appId: "1:506496275301:web:6e65bda5dcdace3da9878c",
    measurementId: "G-JD6SG9KYX3"
  };

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);




  







  class App extends React.Component{

    

    
    render() {
      return(
        <div className = "App">
          <Router>
      
          
          <Nav>
          </Nav>
      
            
     
          <Switch location={this.props.location}>
              <Route path ="/videos" component ={videos}/>
              <Route path ="/projects" component ={projects}/>
              <Route path ="/jank" component ={jank}/>
              <Route path ="/Contact" component ={Contact}/>
              <Route path ="/homepage" component ={Home}/>
              <Route path ="/" component ={Home}/>
            </Switch>

            
      
          </Router>
          <div>
        
            </div>   
        </div>

     

        
      
        
      )
    }

  }


  export default App;

