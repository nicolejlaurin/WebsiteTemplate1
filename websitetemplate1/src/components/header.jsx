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
<div id="header-top-bar">
              <div class="container-2">
                  <div class="row">
                      <ul class="top-bar-contact">
                      <li>
                        <a href="tel:+1 613-260-9999">
                        <i class="fa fa-phone">
                        </i>+1 613-260-9999</a>
                      </li>
                      <li>
                        <a href="https://maps.google.com/?q=2950+bank+street,+Ottawa+K1T1N8" target="_blank">
                        <i class="fa fa-map-marker">
                        </i>2950 bank street, Ottawa K1T1N8</a></li>
                      </ul>

                      <div class="top-bar-social">
                      <a href="https://www.facebook.com/blossomsalonspa2950bankstreet/?__tn__=%2Cd%2CP-R&amp;eid=ARD7T8zZA4aA2o-CqBip5ZRmMVMOo4f4U4Db1lLykTfAk6JL6R62wS-e3Ta3R8FySvSqUFLMbeXmYiwB" target="_blank">
                      <i class="fa fa-facebook"></i></a>

                      <a href="#" target="_blank">
                      <i class="fa fa-twitter"></i></a>

                      <a href="#" target="_blank">
                      <i class="fa fa-linkedin"></i></a>

                      <a href="https://instagram.com/blossomsalonspa.2950bank.st?igshid=t7fcm1u2zzf9" target="_blank">
                      <i class="fa fa-instagram"></i></a>

                      <a href="#" target="_blank">
                      <i class="fa fa-google-plus"></i></a>

                      <a href="#" target="_blank">
                      <i class="fa fa-youtube"></i></a>
                      </div>
                  </div>
              </div>
          </div>

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
    <NavLink to="/booking"  className='nav-links'>Booking</NavLink>
  </li>
  <li>
    <NavLink to="/prices"  className='nav-links'>Prices</NavLink>
  </li>
  <li>
    <NavLink to="/policies"  className='nav-links'>Policies</NavLink>
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
