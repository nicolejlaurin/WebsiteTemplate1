import React from 'react';
import { Link }  from 'react-router-dom';


export default function Section1() {
  return (
	<div className='about-CN'>
  <div class="about-box">
    <div>
    <h4>
    Beauty in the blink of an eye
    <hr className="underline-about"></hr>
    </h4>
		<p>
    At Lashed by Alisha, we specialize in long, luxurious and completely natural-looking eyelash extension.
    We provide classic, volume, mixed and mega volume extensions, using only the best materials. Our eyelash extensions
    eliminates the need for mascara, giving you a low-maintenance beauty routine. </p>
    </div>
    <Link to='/services'>
    <button className="service-button">Learn More</button>
    </Link>
  </div>
  </div>

);
}
