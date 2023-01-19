import React from 'react';
import Img_logo from '../images/image.jpg';
import { Link }  from 'react-router-dom';
import jQuery from 'jquery';

const wrapper = document.querySelector('.wrapper');
const indicators = [...document.querySelectorAll('.indicators button')];

let currentTestimonial = 0;

indicators.forEach((item, i) => {
    item.addEventListener('click', () => {
        indicators[currentTestimonial].classList.remove('active');
        wrapper.style.marginLeft = `-${100 * i}%`;
        item.classList.add('active');
        currentTestimonial = i;
    })
})


export default () => (
	<div class="service-main">
  <h4>ALL YOUR BEAUTY NEEDS </h4>
  <hr className="underline"></hr>
  <div class="container-outer">

		<div class="container">
      <div class="type classic">
  		  <Link to='/'></Link>
      </div>
      <div class="container-inner">
        <h4>Classic Lashes</h4>
        <p>A Lash Mini is the technique of attaching eyelash extensions to 50-70% of your natural applicable lash to create a more light and subtle look. A great option to achieve that truly natural appearance. </p>
      </div>
    </div>

    <div class="container">
      <div class="type hybrid">
    		<Link to='/aboutpage'>
    		</Link>
      </div>
      <div class="container-inner">
        <h4>Hybrid Lashes</h4>
        <p>A Lash Mini is the technique of attaching eyelash extensions to 50-70% of your natural applicable lash to create a more light and subtle look. A great option to achieve that truly natural appearance. </p>
      </div>
		</div>

    <div class="container">
    <div class="type vol">
		<Link to='/'>
		</Link>
    </div>
    <div class="container-inner">
    <h4>Volume Lashes</h4>
    <p>A Lash Mini is the technique of attaching eyelash extensions to 50-70% of your natural applicable lash to create a more light and subtle look. A great option to achieve that truly natural appearance. </p>
    </div>
		</div>

    <div class="container">
		<div class="type mega">
		<Link to='/'>
		</Link>
    </div>
    <div class="container-inner">
    <h4>Mega Volume Lashes</h4>
    <p>A Lash Mini is the technique of attaching eyelash extensions to 50-70% of your natural applicable lash to create a more light and subtle look. A great option to achieve that truly natural appearance. </p>
    </div>
		</div>
		</div>

	</div>
);
