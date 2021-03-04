import './App.css';
import {Link} from 'react-router-dom';
import Dropdown from './Dropdown';

function Nav() {
    const navStyle = {
        color: 'white',
        textDecoration: 'none'

    };

  return (
    
    <div className="App">
      <nav>AIRPLANE DATABASE
      <ul className = "nav-links" >
      <Link to="/homepage" style = {navStyle} > 
          <li>Homepage</li>
          </Link>
          <Link to="/customers" style = {navStyle} > 
          <li>All Customers </li>
          </Link>
          
          <li> <Dropdown/> </li>
      </ul>
      </nav>
    </div>
  );
}


export default Nav;
