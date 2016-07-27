import React from 'react';
import Alumn from './Alumn';
//Import components
 
const AlumniGrid = React.createClass({
	componentWillMount () {
		this.props.fetchAlumni();
	},

	render(){
		return (
			<div className="alumni-grid">
			  {this.props.alumni.map((alumn) => <Alumn {...this.props} alumn={alumn} />)}
			</div>

		)
	}
 });

export default AlumniGrid;