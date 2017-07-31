import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/sagas';
import * as reducers from './reducer';
import { connectRoutes } from 'redux-first-router';
import createHistory from 'history/createBrowserHistory';
import { reducer as formReducer } from 'redux-form';
import { combineReducers } from 'redux';

const history = createHistory();

const routesMap = {
  HOME: '/',
  RESULTS: '/results'
}

const { reducer, middleware, enhancer } = connectRoutes(history, routesMap);
const rootReducer = combineReducers({...reducers, location: reducer, form: formReducer})

const logger = store => next => action => {
  console.group(action.type)
  console.info('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  console.groupEnd(action.type)
  return result
}

const sagaMiddleware = createSagaMiddleware()
const middlewares = applyMiddleware(sagaMiddleware, logger, middleware);

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  compose(enhancer, middlewares)
)
sagaMiddleware.run(rootSaga)

export default store;
