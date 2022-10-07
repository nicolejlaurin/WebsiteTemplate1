import React from 'react';
import Classic from '../images/classic.jpg';
import Hybrid from '../images/hybrid.jpg';
import Vol from '../images/volume.jpg';
import Mega from '../images/mega.jpg';

export default () => (

	<div className='service'>
  <div className='services'>
    <h3>
    SERVICES
        </h3>
    </div>
		<div className='service-desc'>
			<h3>
			DREAMY EYELASH EXTENSIONS
			</h3>
			<h4>
			Do you desire perfect lashes without the need for curlers and mascara?
			</h4>
			<p>
			At Blinx & Beauty Lash Studio, we know that the right lashes can transform and enhance your natural beauty. We use only the finest products on the market and are highly skilled, licensed professionals. We specialize in strictly eyelash extension services and our options are three techniques that can be used to create the perfect eyelashes; Classic Lashes, Hybrid Lashes, and Volume Lashes. We customize your eyelash extensions to the shape of your eye so they are tailored for you. 	    </p>
		</div>

		<div class="service-split">
	<img class="service-split-img" src={Classic}></img>
	<div>
	<h4>Classic Lashes 💞</h4>
	<p>
  Traditional application of one eyelash extension applied to each natural lash. Provides a more defined look as if you have on the perfect mascara naturally. As they are individual, they will only be as full as your natural lashes.</p>
	</div>
</div>

<div class="service-split">
	<img class="service-split-img" src={Hybrid}></img>
	<div>
	<h4>Hybrid Lashes 💞</h4>
	<p>
Hybrid Lash extensions are the half way step between a classic set of eyelash extensions and a volume set. This is a mixture of both Classic and Volume lashes to provide the fluffy look of Volume and the definition and boldness of Classics.
</p>
	</div>
</div>

<div class="service-split">
	<img class="service-split-img" src={Vol}></img>
	<div>
	<h4>Volume Lashes 💞</h4>
	<p>
Multiple thin, lightweight eyelash extensions are handmade into a fan and applied to each natural lash. Can be customized based on preference and type of natural lash to give more or less density to the set. Great for filling in sparse lashes to achieve a fuller lash line. Also perfect for those with more lashes that want a bold, dramatic, fluffy look.	</p>
	</div>
</div>

<div class="service-split">
	<img class="service-split-img" src={Mega}></img>
	<div>
	<h4>Mega Volume Lashes 💞</h4>
	<p>
Multiple thin, lightweight eyelash extensions are handmade into a fan and applied to each natural lash. Can be customized based on preference and type of natural lash to give more or less density to the set. Great for filling in sparse lashes to achieve a fuller lash line. Also perfect for those with more lashes that want a bold, dramatic, fluffy look.	</p>
	</div>
</div>
<br></br>
<br></br>

	</div>
);
