import {applyMiddleware, combineReducers, legacy_createStore} from 'redux'
import thunk from 'redux-thunk'

import {reducer as AdminReducer} from './Admin/reducer.js'

const mainReducer = combineReducers({AdminReducer});

export const store = legacy_createStore(mainReducer,applyMiddleware(thunk))