import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'


import alumni from './alumni';
import ui from './ui';
import teams from './teams'

const rootReducer = combineReducers({alumni, ui, teams, routing:routerReducer});

export default rootReducer;