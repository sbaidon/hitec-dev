import React from 'react';
import Apple from '../images/appstore.svg';
import Android from '../images/google-play-badge.png';

//Import components
 
const Api = React.createClass({
	render(){
		return (
			<div className="api">
			  <div><h1>Apps</h1></div>
			  <a>
				<img className="apple-logo" src={Apple} />
				</a>
				
				<a href='https://drive.google.com/open?id=0B_vTMs3nA-1KNGhHSlZQQkRqTU0'>
			    <img className="android-logo" src={Android} />
			  </a>
			</div>

		)
	}
 });

export default Api;