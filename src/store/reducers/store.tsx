import { createStore } from 'redux'
import { combineReducers } from 'redux'
import { IState, postReducer } from './postReducer'

const rootReducer = combineReducers({
	post: postReducer,
})

export const store = createStore(rootReducer)
