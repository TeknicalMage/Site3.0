import { Link } from 'react-router-dom';
import './App.css';

import projects from "./Pages/Project"
import videos from "./Pages/Video"
import Homeinfo from './Pages/Homepage';
import Contact from './Pages/Contact';
import jank from "./Pages/Jank"

function Nav() {
  return (
    <nav>
      <ul className = "grid-container">
        <Link to='/Homepage' className="grid-item"  style={{ textDecoration: 'none' }}>
          <li className="big-glow">Home</li>
        </Link>
        <Link to='/projects' className="grid-item" style={{ textDecoration: 'none' }}>
          <li className="big-glow">Projects</li>
        </Link>
        <Link to='/videos' className="grid-item"  style={{ textDecoration: 'none' }}>
        <li className="big-glow">Videos</li>
        </Link>
        <Link to='/jank' className="grid-item"  style={{ textDecoration: 'none' }}>
        <li className="big-glow">Jank</li>
        </Link>
        <Link to='/Contact' className="grid-item"  style={{ textDecoration: 'none' }}>
        <li className="big-glow">Contact</li>
        </Link>
      </ul>
    </nav>

  )
}



export default Nav;
