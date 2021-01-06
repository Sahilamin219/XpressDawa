import React from "react";
import "./homepage.css";
import { Link } from 'react-router-dom';
// import styles from './mystyle.module.css'; 
// https://materializecss.com/autocomplete.html
// https://www.w3schools.com/colors/colors_shades.asp
const Homepage = (props) => {
	return (
	<>
	<div style={{backgroundColor: "#E8E8E8"}}>
	<div className='container' style={{backgroundColor: "lightblue"}}>
		<div className="row">
		<img src="pillpack.png" alt="logo" className='logo-h'/> 
		</div>
		<div class="row">
		<p>&nbsp;&nbsp;by <b>XpressDawa</b> pharmacy</p>
		</div>
	</div>

	<div className='hero-h' style={{backgroundColor: "#E8E8E8"}}>
		<h4>
		Your medication,
		<br/>
		sorted and delivered 
		</h4>
		<p className='hero-p'>PillPack is a full-service pharmacy
		</p><p className='hero-p'>
		designed around your life.</p>
		<p>&nbsp;&nbsp;</p>
		<a className="btn btn-primary" href="#" role="button" style={{marginLeft :"3%"}}>Get Started</a>
		<img src="pic0.png" class='rounded float-left' 	style={{marginLeft :"30%"}} width="80%" height="80%" alt="logo"/> 

	</div>

	<div className="hide-desktop hp-mobile-video" style={{backgroundColor: "white"}}>
	<p>&nbsp;&nbsp;</p>
	<p>Introducing <b>XpressDawa</b></p>
		<p><b>Deliver them to you every month
		<br/>
		<a href="#" className='featured-link-txt'>See how it works</a></b></p>
	</div>

	<div className='.hp-meds-art-mod'>
	<div className='section-inner'>
	<p className='section-subh'>Full Service</p>
	<h2 className='section-h'>A new kind of care</h2>
	<div className="hp-meds-list-mod">
		<div className="hp-meds-txt-item">
			<h2 className='list-h'>Automatic refills</h2>

			<p className='list-p'>We monitor and manage your refills with your doctors so you always have the medications you need.</p>
		</div>
	</div>
	<div className="hp-meds-list-mod">
		<div className="hp-meds-txt-item">
			<h2 className='list-h'>Behind-the-scenes support</h2>

			<p className='list-p'>We work directly with your doctors and insurance to save you time and hassle.</p>
		</div>
	</div>
	<div className="hp-meds-list-mod">
		<div className="hp-meds-txt-item">
			<h2 className='list-h'>Everything in one place</h2>

			<p className='list-p'>We organize all your medication, billing, and prescription details for easy access.</p>
		</div>
	</div>
	</div>
	</div>


	 <form class="example">
          <input
            type="text"
            className="search-bar"
            placeholder="Search Medicines  "
          />
          <button type="submit">
            <i class="fa fa-search"></i>
          </button>
        </form>
        <div className="section">
        <h3 className="centre">
          <div className="space" />
          I visit the pharmacy…
        </h3>
          <div class="card">
            <h1 className="centre">
              <i class="fas fa-calendar-check"></i>
            </h1>
            <p className="container-h">Every Week</p>
          </div>
          <div className="space" />
          <div class="card">
            <h1 className="centre">
              <i class="fas fa-calendar-check"></i>
            </h1>
            <p className="container-h"> Once Or twice a month </p>
          </div>
          <div className="space" />
          <div className="card">
            <h1 className="centre">
              <i class="fas fa-calendar-check"></i>
            </h1>
            <p className="container-h">Once in a while</p>
          </div>
	</div>



	<div>
		<div className="footer-primary">
		  <div className="row">
		    <div className="span12">
		      <div id="footer">
		        <div className="row">
		        <ul className='column'>
		          <ul className='circle-btn' style={{backgroundColor: "lightblue"}} ><a href="#">Get Started</a></ul>
		         </ul>
		        <ul className='column'>
		          <ul className='btn-outline'>999 010 8490</ul>
		        </ul>
		        </div>
		      </div>
		    </div>
		  </div>
		</div>
	</div>
	</div>
	</>
	);
};
export default Homepage;
/// &nbsp;&nbsp;