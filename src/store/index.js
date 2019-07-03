import { 
  createStore, 
  combineReducers, 
  compose, 
  applyMiddleware 
} from 'redux'
import thunk from 'react-redux'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default (createStore(
  combineReducers(reducers),
  composeEnhancers(applyMiddleware(thunk))
))