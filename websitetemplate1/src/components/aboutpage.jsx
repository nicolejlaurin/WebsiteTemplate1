import React from 'react';
import Img_logo from '../images/Girl.png';
import Team_Img from '../images/team.jpg';

export default () => (

	<div className='about'>
	<div className='abt-back'>
	<h3>
	ABOUT US
	</h3>
	<img src={Team_Img} id="about-img"></img>

		<h4>
		Do you desire perfect lashes without the need for curlers and mascara?
		</h4>
		<p>
		At Blinx & Beauty Lash Studio, we know that the right lashes can transform and enhance your natural beauty. We use only the finest products on the market and are highly skilled, licensed professionals. We specialize in strictly eyelash extension services and our options are three techniques that can be used to create the perfect eyelashes; Classic Lashes, Hybrid Lashes, and Volume Lashes. We customize your eyelash extensions to the shape of your eye so they are tailored for you.
		</p>
		<p>
		Established in 2005, we have been providing exceptional aesthetic services with cutting edge techniques, high-level professionalism, and the best products on the market.  We focus on bespoke lash and brow services to enhance, compliment and balance the symmetry of your face.
​
Quality takes time, and each appointment is timed accordingly to allow for individual customization, proper implementation of skilled techniques, and sanitation protocols.  Our lash and brow technicians are well trained and dedicated to their craft.  You will experience unparalleled expertise in a friendly, relaxed environment.
​
​
Our Founder and Master Stylist

Pretty In The City founder, Veronica Tran is one of the first estheticians in Toronto, to train in the art of Eyelash Extensions, attending workshops in both Toronto and New York. Her expertise can be seen in many national magazines including Flare, FASHION, Elle Canada, Elevate, REFINERY29, and Best Health.
​
She holds several Eyelash Extension certifications in both Classic and Volume techniques, a diploma as a Skin Care Technician and Permanent Make-Up, as well as several certificates for infection control.  Attending workshops, seminars, and conferences on an annual basis, Veronica is always up to date with the newest innovations and industry standards. Her latest accomplishments include several master classes for Volume Eyelash Extensions and Microblading with well-regarded industry professionals such as Irina Levchuk,  Daria Chuprys, Andrea Toth,  Mary Ritcherson, and Branko Babic.  Veronica is also one of the first in Canada to be certified with PhiBrows.

Most recently, Pretty In The City was named one of the best places in Canada for microblading by Fashion Magazine online, one of the best places for microblading in Toronto by BlogTo, and one of the top places for lash extensions in Toronto by Narcity Toronto.
</p>
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
