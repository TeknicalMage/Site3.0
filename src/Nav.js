import { Link } from 'react-router-dom';
import './App.css';

function Nav() {
  return (
    <nav>
      <ul className = "grid-container">
        <Link to='/projects' className="grid-item" style={{ textDecoration: 'none' }}>
          <li className="big-glow">Projects</li>
        </Link>
        <Link to='/videos' className="grid-item"  style={{ textDecoration: 'none' }}>
        <li className="big-glow">Videos</li>
        </Link>
      </ul>
    </nav>



  )
}

export default Nav;
