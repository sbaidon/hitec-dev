import React from 'react';
import { Link } from 'react-router';
import Apple from '../images/appstore.svg';
import Android from '../images/google-play-badge.png';

//Import components
 
const Api = React.createClass({
	render(){
		return (
			<div className="api">
			  <div><h1>Apps</h1></div>
				<img className="apple-logo" src={Apple} />
			  <img className="android-logo" src={Android} />
			</div>

		)
	}
 });

export default Api;