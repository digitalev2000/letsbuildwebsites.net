import React from 'react';
import Contact from './Contact';

function Main() {
  return (
<div id="main">

<section id="one">
<header className="major">
<h2>Welcome to my portfolio!</h2>
</header>
<p>I’m a passionate Frontend Web Developer dedicated to creating beautiful, responsive, and user-friendly websites. With a strong foundation in HTML, CSS, and JavaScript, I bring designs to life with clean code and innovative solutions. Explore my projects to see how I combine creativity and technical skills to deliver seamless digital experiences. We can be amazing together!</p>
<ul className="actions">
<li><a href="#contact_sec" className="button">Let's Build Something</a></li>
</ul>
</section>

<section id="two">
<h2>Recent Work</h2>
<div className="row">
<article className="col-6 col-12-xsmall work-item">
	<a href="images/fulls/1.png" className="image fit thumb"><img src="images/thumbs/1.png" alt="" /></a>
	<h3><a href="https://www.angstromdesignbuild.com/" target="_blank" rel="noreferrer">Angstrom360</a></h3>
	<p>Angstrom360 is a design and build company that specializes in architectural and construction services. The company offers services related to designing and building residential or commercial properties.</p>
</article>
<article className="col-6 col-12-xsmall work-item">
	<a href="images/fulls/2.png" className="image fit thumb"><img src="images/thumbs/2.png" alt="" /></a>
	<h3><a href="https://www.midwestcanvas.com/" target="_blank" rel="noreferrer">Midwest Canvas</a></h3>
	<p>Midwest Canvas is a Chicago based corporation posed as America's leading manufacturer of pool covers and supplies. From the beginning, our business philosophy has been simple; quality products of superior value, and timely delivery.</p>
</article>
<article className="col-6 col-12-xsmall work-item">
	<a href="images/fulls/3.png" className="image fit thumb"><img src="images/thumbs/3.png" alt="" /></a>
	<h3><a href="https://www.marketron.com/digital/" target="_blank" rel="noreferrer">Marketron Digital</a></h3>
	<p>A Chicago based marketing agency providing products and services, users can successfully propose, price and execute multimedia advertising campaigns including television, radio, O&O and digital media.</p>
</article>
<article className="col-6 col-12-xsmall work-item">
	<a href="images/fulls/4.png" className="image fit thumb"><img src="images/thumbs/4.png" alt="" /></a>
	<h3><a href="https://www.apartments.com/" target="_blank" rel="noreferrer">Apartments.com</a></h3>
	<p>Apartments.com is a site to search over 1 million housing listings including apartments, houses, condos, and townhomes available for rent. You’ll find your next home, in any style you prefer.</p>
</article>
<article className="col-6 col-12-xsmall work-item">
	<a href="./images/fulls/5.png" className="image fit thumb"><img src="../images/thumbs/5.png" alt="" /></a>

	<h3><a href="https://purohitnavigation.com/" target="_blank" rel="noreferrer">Purohit Navigation</a></h3>
	<p>The website offers services related to marine navigation, including training courses and consulting services. The company offers Training Courses, Consulting Services and Vessel Traffic Services.</p>
</article>
<article className="col-6 col-12-xsmall work-item">
	<a href="images/fulls/6.png" className="image fit thumb"><img src="images/thumbs/6.png" alt="" /></a>
	<h3><a href="https://www.mimiproductions.com/" target="_blank" rel="noreferrer">MiMi Productions</a></h3>
	<p>Mimi Productions is an award winning Chicago Video and Television Production Company. Their clients range from Healthcare, Automotive, Television Networks, Advertising Agencies and many others.</p>
</article>
</div>
<ul className="actions">
<li><a href="www.somelink.com" className="button">Full Portfolio</a></li>
</ul>
</section>

<section id="three">

<h2 id="contact_sec" >Lets Get In Touch</h2>
<div className="row">
<div className="col-8 col-12-small">
<Contact />
</div>
<div className="col-4 col-12-small">
<ul className="labeled-icons">
<li><h4>Address</h4>
	<h3 className="icon solid fa-home">
	<span className="label">Address</span></h3>
	203 Robie St.<br />
	Saint Paul MN.<br />
	55102
</li>
<li>
<h3 className="icon solid fa-mobile-alt"><span className="label">Phone</span></h3>
763-485-6584
</li>
<li>
			<h3 className="icon solid fa-envelope"><span className="label">Email</span></h3>
			<a href="mailto:berry.richard1@gmail.com">berry.richard1@gmail.com</a>
		</li>
	</ul>
</div>
</div>
</section>
</div>
  )
}

export default Main