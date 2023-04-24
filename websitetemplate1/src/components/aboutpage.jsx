import React from 'react';
import Img_logo from '../images/Girl.png';
import Team_Img from '../images/team.jpg';

export default () => (

	<div className='about'>
	<div className='abt-back'>
	<h3>
	ABOUT US
	</h3>
	<img src={Team_Img} className="team-img"></img>

		<h4>
		Meet our Team
		</h4>
		<p>
		At Lashes by Alishia, we know that the right lashes can transform and enhance your natural beauty. We use only the finest products on the market and are highly skilled, licensed professionals. We specialize in strictly eyelash extension services and our options are four techniques that can be used to create the perfect eyelashes; Classic Lashes, Hybrid Lashes, and Volume Lashes and Mega Volume Lashes. We customize your eyelash extensions to the shape of your eye so they are tailored for you.
		</p>
		<p>
		Established in 2022, we have been providing exceptional aesthetic services with cutting edge techniques, high-level professionalism, and the best products on the market.  We focus on bespoke lash and brow services to enhance, compliment and balance the symmetry of your face.
		Quality takes time, and each appointment is timed accordingly to allow for individual customization, proper implementation of skilled techniques, and sanitation protocols.  Our lash and brow technicians are well trained and dedicated to their craft.  You will experience unparalleled expertise in a friendly, relaxed environment.
​</p>
	</div>
		<div className="aboutpage-split">
			<img src={Img_logo} id="about-img"></img>
			<div className="aboutpage-text">
				<h4> Our Founder </h4>
				<p>
				Alishia Freya is the founder of Alishia's Lash Bar, a Miami based lash and beauty company specializing in luxurious lash extensions. These high-end lash extensions quickly became popular in Miami (because good lashes speaks volumes), and is now traveling nationwide. Customer Service is at the core of our values, and we strive to ensure our clients receive a top tier experience from beginning to end.				​		Alishia is always up to date with the newest innovations and industry standards, attending workshops, seminars, and conferences on an annual basis. Her latest accomplishments include several master classes for Volume Eyelash Extensions and Microblading.
				</p>
			</div>
		</div>
	</div>
);
