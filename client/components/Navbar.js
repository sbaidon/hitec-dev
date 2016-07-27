import React from 'react';
import { Link } from 'react-router';
import CSSTransitionGroup from 'react-addons-css-transition-group';

const Navbar = React.createClass({
	handleClick(e) {
		e.preventDefault();
		this.props.registerAlumn(this.props.alumn);
	},

	render() {
		return (
			<div className="navbar">
				    <h1>
				      <Link to="/">
				        Registro
				      </Link>
				    </h1>

				    <h1>
				      <Link to="points">
				      Puntuacion
				      </Link>
				    </h1>
			</div>
		)
	}
});

export default Navbar;