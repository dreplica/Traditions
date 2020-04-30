import React, { useEffect } from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Signup from './Screens/AuthScreen/Register/signup'
import Login from './Screens/AuthScreen/Login/index'
import Admin from './Screens/Adminscreen/Upload' 
import Frontpage from './components/users/frontpage/frontpage';
import History from './Screens/Adminscreen/History' 
import Modal from './components/users/modalbox/modal';
import { connect } from 'react-redux';
import { checkLocal } from './store/actionCreators/actiontypes';
import Adminprofile from './components/users/admin/adminProfile';
import Header from './components/header';

const Maincomponent:React.FC<{getLocal:()=>void}> = ({getLocal}) => {
  useEffect(() => {
    getLocal()
    //update user state from local storage
  }, [])
  return <Router>
    <Modal />
    <Header />
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