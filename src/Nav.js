import { Link } from 'react-router-dom';
import './Pages/App.css';

import projects from "./Pages/Project"
import videos from "./Pages/Video"
import Homeinfo from './Pages/Homepage';
import Contact from './Pages/Contact';
import jank from "./Pages/Jank"
import Exitium from "./Pages/Exitium"
import mylogo from './/Macro-LLC-Red-Logomark.png';

function Nav() {
  return (  
    <nav>
      <ul className = "grid-container">
        <Link to='/Homepage' className="grid-item"  style={{ textDecoration: 'none' }}>
          <li>
          <img src={mylogo} className="Logo-Home" alt="logo" />
          </li>
        </Link>
        <Link to='/projects' className="grid-item" style={{ textDecoration: 'none' }}>
          <li className="killme">Projects</li>
        </Link>
        <Link to='/videos' className="grid-item"  style={{ textDecoration: 'none' }}>
        <li className="killme">About Us</li>
        </Link>
        <Link to='/Contact' className="grid-item"  style={{ textDecoration: 'none' }}>
        <li className="killme">Contact</li>
        </Link>
      </ul>
    </nav>

  )
}



export default Nav;
