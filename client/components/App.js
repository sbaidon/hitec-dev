import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreator';
import Main from './Main';

function mapStateToProps(state) {
	return {
		alumni: state.alumni,
		ui: state.ui,
		teams: state.teams
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(actionCreators, 
		dispatch);
}

const App = connect(mapStateToProps, 
	mapDispatchToProps)(Main);


export default App;
