import React, { useEffect } from 'react';
import {BrowserRouter as Router,Switch,Route, useRouteMatch, useHistory} from 'react-router-dom'
import Signup from './authorization/signup'
import Login from './authorization/login'
import Header from './header/header';
import Homepage from './users/homepage';
import Categories from './users/labels/categories';
import Admin from './users/admin' 
import Frontpage from './users/frontpage';
import Modal from './users/labels/modal';
import SaleRoute from './users/sales';
import { connect } from 'react-redux';
import { checkLocal } from '../store/actionCreators/actiontypes';

const Maincomponent:React.FC<{getLocal:()=>void}> = ({getLocal}) => {
  useEffect(() => {
    getLocal()
    //update user state from local storage
  }, [])
  return <Router>
        <Modal />
          <Header/>
          <Homepage />
              <Switch>
                <Route  path='/home'>
                  <Frontpage />
                </Route>
                <Route path='/signup'>
                  <Signup />  
                </Route>
                <Route path='/signin'>
                  <Login /> 
                </Route>
                {/* <Route path='/sale'>
                  <SaleRoute /> 
                </Route> */}
                <Route path='/admin'>
                  <Admin /> 
                </Route>
              </Switch>
        </Router>
}



export default connect(null,{getLocal:checkLocal})(Maincomponent)