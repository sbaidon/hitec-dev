import React from 'react';

import { render } from 'react-dom';

// Import css
import css from './styles/style.styl';
//Import Components
import App from './components/App';
import AlumniGrid from './components/AlumniGrid';
import Search from './components/Search';
import TeamContainer from './components/TeamContainer';

// import react routers deps
import  { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';
//import Raven from 'raven-js';
//import { sentry_url } from './data/config';

//Raven.config(sentry_url).install();


const router = (
	<Provider store={store}>
		<Router history={history}>
			<Route path = "/" component={App}>
			  <IndexRoute component={Search}></IndexRoute>
			  <Route path="list" component={AlumniGrid} />
			  <Route path="/points" component={TeamContainer} />
			</Route>
		</Router>
	</Provider>

)

render(router, document.getElementById('root'));
