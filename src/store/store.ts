
import thunkMiddleware from 'redux-thunk'
import {createLogger} from 'redux-logger'
import {createStore,applyMiddleware, compose } from 'redux'
import authenticate from './reducers/authentication';
// import * from './reducers/'


declare global  {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
    }
}
// const AllReducers = combineReducers({ authenticateReducer, userReducer })
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

const store = createStore(authenticate,composeEnhancers)

export default store;