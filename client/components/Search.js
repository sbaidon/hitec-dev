import React from 'react';
import { Link } from 'react-router';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import Alumn from './Alumn';



const Search = React.createClass({

	componentWillMount () {
		this.props.fetchAlumni();
	},

	handleSubmit(e) {
		e.preventDefault();
	  const alumn = this.props.alumni.find((alumn) => alumn.matricula == this.refs.searchForm[0].value);
	  let number = 0;
	  this.props.alumni.forEach((alumn) =>  number += alumn.asistio ? 1 : 0);
	  if (alumn !== undefined) { alumn.numero = number }
	  this.props.selectAlumn(alumn);
	},

	render() {
		return (
			<div className="search-container">
						<form ref="searchForm" className="search-form" onSubmit={this.handleSubmit}>
						  <input type="text" placeholder="Matricula" />
						  <button>Buscar</button>
						</form>


						  {this.props.ui.selectedAlumn ? <Alumn {...this.props} alumn={this.props.ui.selectedAlumn}/> : <div> <p>La matricula es incorrecta</p></div>} 

			</div>
		)
	}
});

export default Search;