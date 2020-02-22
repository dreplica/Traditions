import React from 'react';
import {Provider} from 'react-redux'
import {BrowserRouter as Router} from 'react-router-dom'
import store from '../store/store';
import Signup from './authorization/signup'
import Login from './authorization/login'
import Header from './header/header';
import Homepage from './users/homepage';
import Categories from './users/categories';
import Frontpage from './users/frontpage';

export default function Maincomponent() {
  return (
    <> 
    <Provider store={store}>
      <Header/>
      <Homepage />
      <Frontpage />
      
        <Router>
            {/* <Signup />  */}
            {/* <Login />  */}
        </Router>
    </Provider>
     
    </>
  );
}
