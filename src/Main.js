  import './Pages/App.css';

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
  import Exitium from "./Pages/Exitium"

  const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID
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
              <Route path ="/exitium" component ={Exitium}/>
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

