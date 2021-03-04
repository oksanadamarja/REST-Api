import React from 'react';
import { Component } from 'react';
import {Link} from 'react-router-dom';

class Dropdown extends Component {
    
    state = {
      open: false,
    };
    handleButtonClick = () => {
      this.setState(state => {
        return {
          open: !state.open,
        };
      });
    };
    handleClickOutside = event => {
        if (this.container.current && !this.container.current.contains(event.target)) {
          this.setState({
            open: false,
          });
        }
      };
    componentDidMount() {
        document.addEventListener("mousedown", this.handleClickOutside);
    }
    componentWillUnmount() {
        document.removeEventListener("mousedown", this.handleClickOutside);
      }
      
    container = React.createRef();
    state = {
    open: false
    
};

render(){
    const dropdownStyle = {
        color: 'black',
        textDecoration: 'none'
    
    };
 return(
    <li><div className="container" ref={this.container}>
    <button type="button" class="button" onClick={this.handleButtonClick}>
    FFC ☰
    </button>
    {this.state.open && (
     <div class="dropdown">
     <ul className = "dropdown-ul">
        <Link to="/bronzCustomers" style = {dropdownStyle}> 
       <li className = "dropdown-li">Bronz Customer</li>
       </Link>
       <Link to="/silverCustomers" style = {dropdownStyle}> 
       <li className = "dropdown-li">Silver Customer</li>
       </Link>
       <Link to="/goldCustomers" style = {dropdownStyle}> 
       <li className = "dropdown-li">Gold Customer</li> 
       </Link>
     </ul>
   </div>
  )}
  </div>
  </li>
 );
}

}
 export default Dropdown;

