import { useState } from "react";
import Logo from "./images/Log.png";
import { NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdAccountCircle } from "react-icons/md";
import { FaBagShopping } from "react-icons/fa6";
import "./Nav.css"
import Dropdown from 'react-bootstrap/Dropdown';

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="nav">
      
     
      <div className="nav-left">
        <img src={Logo} alt="logo" />
      </div>

      
      <ul className={`nav-center ${menuOpen ? "open" : ""}`}>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/menu">Menu</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
      </ul>

      <div className="nav-right">
        <div >
            
             <Dropdown>
      <Dropdown.Toggle className="acc" id="dropdown-basic">
       <MdAccountCircle className= "cart-icon" />
      </Dropdown.Toggle>

      <Dropdown.Menu>
       <Dropdown.Item as={NavLink} to="/" className="links">
  User
</Dropdown.Item>

<Dropdown.Item as={NavLink} to="/login" className="links">
  Admin
</Dropdown.Item>
      
      </Dropdown.Menu>
    </Dropdown>
          
        </div>
        <NavLink to="/cart"> <FaBagShopping className="cart-icon" /></NavLink>
       

        {/* HAMBURGER */}
        <RxHamburgerMenu 
          className="hamburger" 
          onClick={() => setMenuOpen(!menuOpen)} 
        />
      </div>

    </nav>
  );
}