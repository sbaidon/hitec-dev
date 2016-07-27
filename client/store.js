 import { createStore, compose, applyMiddleware } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import thunkMiddleware from 'redux-thunk';


//import the root reducer
import rootReducer from './reducers/index';

import alumni from './data/alumni';
import ui from './data/ui';
import teams from './data/teams';

//create an obejct for the default data
const defaultState = {
	alumni,
	ui,
	teams
};

const store = createStore(rootReducer, defaultState, compose(applyMiddleware(thunkMiddleware), 
	window.devToolsExtension ? window.devToolsExtension() : f => f
	));

export const history = syncHistoryWithStore(browserHistory, store)

if(module.hot) {
	module.hot.accept('./reducers/', () => {
		const nextRootReducer = require('./reducers/index').default;
		store.replaceReducer(nextRootReducer);
	});
}

export default store;