import { createStore, combineReducers } from 'redux'
import { statusReducer } from '../reducers/status'

export const rootReducer = combineReducers({ status: statusReducer })

export const store = createStore(rootReducer)
