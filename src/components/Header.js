import React from 'react';
import Image from '.././Images/logo.png';
import {Navbar,Nav} from 'react-bootstrap';
import  {NavLink} from 'react-router-dom';
import cartImage from '../Images/cart.png';



const Header = props =>{


return (
  <Navbar sticky="top" className="headnav" expand="lg" >
    <Navbar.Brand href="/"><img className="header__logoImage" src={Image} alt="twn-logo" /><div>Doc.Car</div></Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" id="navbar-toggler-icon"/>
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="ml-auto"  >
        <NavLink to="/" id="element" exact activeClassName="navbar__link--active"   >Home</NavLink>
        <NavLink to="/services" id="element" exact activeClassName="navbar__link--active"  >Services</NavLink>
        <NavLink to="/aboutUs" id="element" exact activeClassName="navbar__link--active"  >About Us</NavLink>
        <NavLink to="/contact" id="element" activeClassName="navbar__link--active">Contact</NavLink>
      </Nav>
      <Nav className="ml-auto"  >
        <NavLink to="/checkout" id="element"  activeClassName="navbar__link--active">
          <div className='navicon'>
            <img src={cartImage} alt="cart-image" />
          </div>
          <div className='navText'>
            Cart
          </div>
        </NavLink>
      </Nav>
    </Navbar.Collapse>
  </Navbar> 
)
}




export default Header; 