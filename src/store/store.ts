
import thunkMiddleware from 'redux-thunk'
import {createLogger} from 'redux-logger'
import {createStore,applyMiddleware, compose,combineReducers } from 'redux'
import authenticate from './reducers/authentication';
import EffectReducers from './reducers/effects'


declare global  {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
    }
}
const AllReducers = combineReducers({ authenticate, EffectReducers })
const loggerMiddleware = createLogger();
const enhancers = [];


const middleware:any[]= [thunkMiddleware];

if (process.env.NODE_ENV === "development") {
  middleware.push(loggerMiddleware);
}

if (process.env.NODE_ENV === "development") {
    const devToolsExtension = window?.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

  if (typeof devToolsExtension === "function") {
    enhancers.push(devToolsExtension());
  }
}

const composeEnhancers:any = compose(
  applyMiddleware(...middleware),
  ...enhancers 
);

const store = createStore(AllReducers,composeEnhancers) 

export default store;