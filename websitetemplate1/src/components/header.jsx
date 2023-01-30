import { NavLink } from "react-router-dom";
import Img_logo from '../images/logocanva.png';
import { useLocation } from "react-router";

import React, { useEffect, useState } from 'react';

const ScrollToTop = (props) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <>{props.children}</>
};


function Navigation() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if(window.innerWidth <= 960){
      setButton(false);
    } else {
      setButton(true);
    }
  }

  window.addEventListener('resize', showButton);
  return (
<body>
  <nav className='navbar'>
    <div className='navbar-container'>
    <div class="navbar-left">
     <a href="/" aria-current="page" class="w-inline-block w--current">
     <img src={Img_logo} href='/' alt="Image"></img>
     </a>
     </div>
  <div className='menu-icon' onClick={handleClick}>
    <i className={click ? 'fa fa-times':'fa fa-bars'} color="black"></i>
  </div>



  <div class="navbar-right">

  <ScrollToTop>

  <ul className={click ? 'nav-menu active':'nav-menu'}>

  <li>
    <NavLink to="/" className='nav-links' onClick={closeMobileMenu} >HOME</NavLink>
  </li>
  <li>
    <NavLink to="/aboutpage"  className='nav-links' onClick={closeMobileMenu}>About Us</NavLink>
  </li>
  <li>
    <NavLink to="/services"  className='nav-links' onClick={closeMobileMenu}>Services</NavLink>
  </li>
  <li>
    <NavLink to="/booking"  className='nav-links' onClick={closeMobileMenu}>Booking</NavLink>
  </li>
  <li>
    <NavLink to="/prices"  className='nav-links' onClick={closeMobileMenu}>Prices</NavLink>
  </li>
  <li>
    <NavLink to="/policies"  className='nav-links' onClick={closeMobileMenu}>Policies</NavLink>
  </li>
  <li>
    <NavLink to="/gallery"  className='nav-links' onClick={closeMobileMenu}>Gallery</NavLink>
  </li>



  </ul>
</ScrollToTop>
</div>
</div>
</nav>

</body>


  );
}

export default Navigation;
