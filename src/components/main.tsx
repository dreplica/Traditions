import React, { useEffect } from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Signup from './authorization/signup'
import Login from './authorization/login'
import Header from './header/header';
import Homepage from './header/homepage';
import Admin from './users/admin/admin' 
import Frontpage from './users/frontpage/frontpage';
import History from './users/history/history' 
import Modal from './users/modalbox/modal';
import { connect } from 'react-redux';
import { checkLocal } from '../store/actionCreators/actiontypes';
import Adminprofile from './users/admin/adminProfile';

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
                <Route path='/seller'>
                  <Adminprofile/> 
                </Route>
                <Route path='/signin'>
                  <Login /> 
                </Route>
                <Route path='/history'>
                  <History />
                </Route>
                <Route path='/admin'>
                  <Admin /> 
                </Route>
              </Switch>
        </Router>  
}

export default connect(null,{getLocal:checkLocal})(Maincomponent)