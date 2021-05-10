import './App.css';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Nav from "./Nav";
import Apt from "./App"; 
import projects from "./Project"
import videos from "./Video"


function App() {
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



export default App;

