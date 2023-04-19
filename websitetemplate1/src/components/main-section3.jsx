import React from 'react';
import ReactDOM from "react-dom";
import Img_logo from '../images/image.jpg';
import { Link }  from 'react-router-dom';
import {jQuery, $} from 'jquery';

import Classic from '../images/classic.jpg';
import Hybrid from '../images/hybrid.jpg';
import Vol from '../images/volume.jpg';
import Mega from '../images/mega.jpg';

import Heart from '../images/heart.png';

import {FaChevronRight, FaChevronLeft} from 'react-icons/fa';

import{ Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default () => (
	<div className='testimonials'>
	<h4>
		Testimonials
		<hr className="underline-testimonials"></hr>
	</h4>

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
             <h3>Destiny</h3>
             <h4>Customer</h4>
             <p>
              Lashes by Alisha is fantastic, friendly, and professional. I am so happy I found her, my eyelashes always look amazing and I trust her completely.
             </p>
           </div>
         </div>

         <div>
				 <img src={Mega} ></img>
           <div className="myCarousel">
             <h3>Danna</h3>
             <h4>Customer</h4>
             <p>
               I have been looking for someone to do my eyelashes for ages. I was absolutely blown away by the results. I wanted my eyelashes to be looking very natural and beautiful and they do! She is very professional and friendly. I would highly recommend her services to anyone that is looking for a glamorous flawless look.
             </p>
           </div>
         </div>

         <div>
				 <img src={Hybrid} ></img>
           <div className="myCarousel">
             <h3>Amy</h3>
             <h4>Customer</h4>
             <p>
               I cannot explain how my lashes look, words don't do justice to the beauty of the lashes and the price!! The service Alishia provides is unbeatable. Don't give it a miss.
             </p>
           </div>
         </div>
       </Carousel>
			 </div>

);
