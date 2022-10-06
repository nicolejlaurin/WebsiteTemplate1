import React from 'react';
import { Link }  from 'react-router-dom';


export default () => (
	<div className='landing'>
		<h2>
			Website Template
		</h2>
		<div className='info'>
			<p >Learning more about how we can help you.</p>
			<Link to='/'>
			<button className="button1">BOOK YOUR CONSULTATION</button>
			</Link>


		</div>
	</div>
);
