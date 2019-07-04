import * as reducers from './reducers'
import { 
  createStore, 
  combineReducers, 
  compose, 
  applyMiddleware 
} from 'redux'
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default (createStore(
  combineReducers(reducers),
  composeEnhancers(applyMiddleware(thunk))
))