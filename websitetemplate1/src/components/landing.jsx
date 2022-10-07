import React from 'react';
import { Link }  from 'react-router-dom';


export default () => (
	<div className='landing'>
		<h2>
			Alishia Lash Bar
		</h2>
		<div className='info'>
			<p >Learning more about how we can help you.</p>
			<Link to='/'>
			<button className="button1">BOOK YOUR APPOINTMENT NOW</button>
			</Link>


		</div>
	</div>
);
