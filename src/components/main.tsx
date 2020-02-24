import React from 'react';
import {Provider} from 'react-redux'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import store from '../store/store';
import Signup from './authorization/signup'
import Login from './authorization/login'
import Header from './header/header';
import Homepage from './users/homepage';
import Categories from './users/labels/categories';
import Frontpage from './users/frontpage';
import Modal from './users/labels/modal';

export default function Maincomponent() {
  return (
    <> 
    <Provider store={store}>
    <Modal />
      <Header/>
      <Homepage />
        <Router>
          <Switch>
            <Route path='/home'>
              <Frontpage />
            </Route>
            <Route path='/signup'>
              <Signup />  
            </Route>
            <Route path='/signin'>
              <Login /> 
            </Route>
          </Switch>
        </Router>
    </Provider>
     
    </>
  );
}
