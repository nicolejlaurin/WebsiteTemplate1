import React from 'react';
import Img_logo from '../images/Girl.png';

export default () => (

	<div className='about'>
	<div className='abt-back'>
		<h3>
		About the Lash Lady
		</h3>
		<h4>
		Do you desire perfect lashes without the need for curlers and mascara?
		</h4>
		<p>
		At Blinx & Beauty Lash Studio, we know that the right lashes can transform and enhance your natural beauty. We use only the finest products on the market and are highly skilled, licensed professionals. We specialize in strictly eyelash extension services and our options are three techniques that can be used to create the perfect eyelashes; Classic Lashes, Hybrid Lashes, and Volume Lashes. We customize your eyelash extensions to the shape of your eye so they are tailored for you. 	    </p>
	</div>
		<div className="aboutpage-split">
			<img src={Img_logo} id="about-img"></img>
			<div className="aboutpage-text">
				<h4 class="name"> Alishia Freya </h4>
				<p>
				Alishia Freya is the founder of Alishia's Lash Bar, a Miami based lash and beauty company specializing in luxurious lash extensions. These high-end lash extensions quickly became popular in Miami (because good lashes speaks volumes), and is now traveling nationwide. Customer Service is at the core of our values, and we strive to ensure our clients receive a top tier experience from beginning to end.	</p>
			</div>
		</div>
	</div>
);
