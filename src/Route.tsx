import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux';

import Screens from './Screens/index'
import Frontpage from './components/users/frontpage/frontpage';
import Modal from './components/users/modalbox/modal';
import { checkLocal } from './store/actionCreators/actiontypes';
import Adminprofile from './components/users/admin/adminProfile';
import Header from './components/header';

interface Iprops{
  getLocal: () => void;
}

function Maincomponent({ getLocal }:Iprops){
  useEffect(() => {
    getLocal()
  }, [])
  return (
    <Router>
      <Modal />
      <Header />
      <Switch>
        <Route path='/home'>
          <Frontpage />
        </Route>
        <Route path='/signup'>
        </Route>
        <Route path='/seller'>
          <Adminprofile />
        </Route>
        <Route path='/signin'>
          <Screens.Login />
        </Route>
        <Route path='/history'>
          <Screens.History />
        </Route>
        <Route path='/admin'>
          <Screens.Upload />
        </Route>
      </Switch>
    </Router>)
}

export default connect(null, { getLocal: checkLocal })(Maincomponent)