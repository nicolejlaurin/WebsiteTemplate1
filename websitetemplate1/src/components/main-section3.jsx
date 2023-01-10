import React from 'react';
import ReactDOM from "react-dom";
import Img_logo from '../images/image.jpg';
import { Link }  from 'react-router-dom';
import {jQuery, $} from 'jquery';

import Classic from '../images/classic.jpg';
import Hybrid from '../images/hybrid.jpg';
import Vol from '../images/volume.jpg';
import Mega from '../images/mega.jpg';
import {FaChevronRight, FaChevronLeft} from 'react-icons/fa';

import{ Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default () => (
	<div className='testimonials'>
	<h2>
		Get in touch with us!
	</h2>

	<Carousel
         showArrows={true}
         infiniteLoop={true}
         showThumbs={false}
         showStatus={false}
         autoPlay={true}
         interval={6100}
       >

         <div>
					 <img src={Vol} ></img>

           <div className="myCarousel">
             <h3>Destiny Fultz</h3>
             <h4>Designer</h4>
             <p>
               It's freeing to be able to catch up on customized news and not be
               distracted by a social media element on the same site
             </p>
           </div>
         </div>

         <div>
				 <img src={Vol} ></img>
           <div className="myCarousel">
             <h3>Daniel Keystone</h3>
             <h4>Designer</h4>
             <p>
               The simple and intuitive design makes it easy for me use. I highly
               recommend Fetch to my peers.
             </p>
           </div>
         </div>

         <div>
				 <img src={Vol} ></img>
           <div className="myCarousel">
             <h3>Theo Sorel</h3>
             <h4>Designer</h4>
             <p>
               I enjoy catching up with Fetch on my laptop, or on my phone when
               I'm on the go!
             </p>
           </div>
         </div>
       </Carousel>
			 </div>

);
