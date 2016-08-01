import React from 'react';
import { Link } from 'react-router';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import image from '../images/hitec-blanco.png';
import tec from '../images/tec.jpg';

const Navbar = React.createClass({
	handleClick(e) {
		e.preventDefault();
		this.props.registerAlumn(this.props.alumn);
	},

	render() {
		return (
			<nav className="navbar">
				<ul>
				  <li>
				  	<Link to="/">
						<img src={image} className='hitec-blanco-logo'/>
						</Link>
					</li>
					<li>
					  <Link to="/" className="link">
					    Registro
					  </Link>
					</li>
				  <li>
				    <Link to="points" className="link">
				      Puntuacion
				    </Link>
				  </li>
				  <li>
				    	<Link to="api" className="link">
				    	Apps
				    	</Link>
				   </li>

				    <li>
				    	<Link to="tec" className="link">
				    	Tec Experience
				    	</Link>
				    </li>
				    <li>
				    <Link to="/">
				    <img src={tec} className='hitec-blanco-logo' />
				    </Link>
				    </li>
				   </ul>
			</nav>
		)
	}
});

export default Navbar;