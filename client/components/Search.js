import React from 'react';
import { Link } from 'react-router';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import Alumn from './Alumn';
import image from '../images/hitec.png'


const Search = React.createClass({

	componentWillMount () {
		this.props.fetchAlumni();
	},

	handleSubmit(e) {
		e.preventDefault();
		this.props.fetchAlumni()
		.then(() => this.props.alumni.find((alumn) => alumn.matricula == this.refs.searchForm[0].value))
		.then((alumn) => this.props.selectAlumn(alumn))
		.catch(() => console.log('error'));
	},

	render() {
		return (
			<div className="search-container">
						<img src={image} className='hitec-logo' />
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