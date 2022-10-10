import React from 'react';
import Img_logo from '../images/image.jpg';
import { Link }  from 'react-router-dom';


export default () => (
	<div class="service-main">
		<div class="container">

    <div class="type classic">
    <h4>Classic Lashes</h4>
		<Link to='/'>
		<button className="service-button">Classic Lashes</button>
		</Link>
	 </div>

    <div class="type hybrid">
    <h4>Hybrid Lashes</h4>
		<Link to='/aboutpage'>
		<button className="service-button">Learn More</button>
		</Link>
		</div>

    <div class="type vol">
    <h4>Volume Lashes</h4>
		<Link to='/'>
		<button className="service-button">Learn More</button>
		</Link>
		</div>

		<div class="type mega">
    <h4>Mega Volume Lashes</h4>
		<Link to='/'>
		<button className="service-button">Learn More</button>
		</Link>
		</div>
		</div>
	</div>
);
