import React from 'react';
import { Link } from 'react-router';
import CSSTransitionGroup from 'react-addons-css-transition-group';

const Alumn = React.createClass({
	handleClick(e) {
		e.preventDefault();
		let number = 0;
		this.props.fetchAlumni()
		.then(() => this.props.alumni.forEach((alumn) =>  number += alumn.asistio ? 1 : 0))
		.then(() => this.props.alumn.numero = number)
		.then(() => this.props.registerAlumn(this.props.alumn))
		.catch(() => console.log('error'));

	},

	render() {
		const { alumn } = this.props;
		return (
			<div className="grid-figure">
				    <p>Nombre: {alumn.nombre}</p>
				    <p>Apellidos: {alumn.paterno} {alumn.materno}</p>
				    <p>Carrera: {alumn.carrera}</p>
				    <p>Matricula: {alumn.matricula}</p>
				    {alumn.asistio ?  <p>Ya estas registrado tu equipo es: <b>{alumn.equipo}</b> </p> : <p>Sin registrar</p> }
				    <br/>

				    {alumn.asistio ? '' : <button onClick={this.handleClick}>Registrar</button>}
			</div>
		)
	}
});

export default Alumn;