import React from 'react';
import Img_logo from '../images/image.jpg';
import { Link }  from 'react-router-dom';

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
		<Link to='/'>
		</Link>
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





  <div class="container-9">
          <div class="wrapper">
              <div class="card">
                  <div class="card-thumb">
                      <img src="img/img-1.jpeg" class="client-img" alt=""></img>
                      <span class="client-name">client one</span>
                  </div>
                  <div class="card-body">
                      <p class="review">I am officially in love with your lashes! They're so fluffy & easy to fan. Defintely will be purchasing all the time. - Gina</p>

                  </div>
              </div>
              <div class="card">
                  <div class="card-thumb">
                      <img src="img/img-2.jpeg" class="client-img" alt=""></img>
                      <span class="client-name">client two</span>
                  </div>
                  <div class="card-body">
                      <p class="review">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, nam. Fugiat, ut provident. Nulla quibusdam labore ea est consequatur sequi fuga iusto laudantium, earum doloremque?</p>

                  </div>
              </div>
              <div class="card">
                  <div class="card-thumb">
                      <img src="img/img-3.jpeg" class="client-img" alt=""></img>
                      <span class="client-name">client three</span>
                  </div>
                  <div class="card-body">
                      <p class="review">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, nam. Fugiat, ut provident. Nulla quibusdam labore ea est consequatur sequi fuga iusto laudantium, earum doloremque?</p>

                  </div>
              </div>
          </div>
          <div class="indicators">
              <button class="active"></button>
              <button></button>
              <button></button>
          </div>
      </div>



	</div>
);
