import React from "react";
import "./homepage.css";
import { Link } from 'react-router-dom';
// import styles from './mystyle.module.css'; 
// https://materializecss.com/autocomplete.html
// https://www.w3schools.com/colors/colors_shades.asp
const Homepage = (props) => {
	return (
	<>
	<div className='row' style={{backgroundColor: "lightblue"}}>
		// <div className='space'></div>
		<div className="column">
		<img src="pillpack.png" alt="logo" className='logo-h'/> 
		</div>
		<div class="column">
		<p>by <b>XpressDawa</b> pharmacy</p>
		</div>
	</div>

	<div className='hero-h'>
		<h4>
		Your medication,
		<br/>
		sorted and delivered 
		</h4>
		<p>PillPack is a full-service pharmacy</p>
		<p>designed around your life.</p>
		<p>&nbsp;&nbsp;</p>
		<a class="btn btn-primary" href="#" role="button" style={{marginLeft :"3%"}}>Get Started</a>
		<img src="pic0.png" class='rounded float-left' 	style={{marginLeft :"30%"}} width="80%" height="80%" alt="logo"/> 

	</div>


	<div>
		<div className="container">
		  <div className="row">
		    <div className="span12">
		      <div id="footer">
		        <div className="row">
		        <ul className='column'>
		          <ul className='circle-btn' style={{backgroundColor: "lightblue"}} > <a href="#">Get Started</a></ul>
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
	</>
	);
};
export default Homepage;
/// &nbsp;&nbsp;