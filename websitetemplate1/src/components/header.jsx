import React, { useEffect } from 'react';
import { NavLink } from "react-router-dom";
import Img_logo from '../images/logo.png';
import { useLocation } from "react-router";

const ScrollToTop = (props) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <>{props.children}</>
};


function Navigation() {


  return (
<body>
  <nav className='navbar'>
    <div className='navbar-container'>
    <div class="navbar-left">
     <a href="/" aria-current="page" class="w-inline-block w--current">
     <img src={Img_logo} href='/' alt="header logo "></img>
     </a>
     </div>
  <div className='menu-icon' >
  </div>

  <ScrollToTop>
  <li>
    <NavLink to="/" className='nav-links' >Home</NavLink>
  </li>
  <li>
    <NavLink to="/aboutpage"  className='nav-links'>About Us</NavLink>
  </li>
  <li>
    <NavLink to="/services"  className='nav-links'>Services</NavLink>
  </li>
  <li>
    <NavLink to="/prices"  className='nav-links'>Prices</NavLink>
  </li>
  <li>
    <NavLink to="/gallery"  className='nav-links'>Gallery</NavLink>
  </li>

</ScrollToTop>

</div>
</nav>

</body>


  );
}

export default Navigation;