import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux';

import Screens from './Screens/index'
import Frontpage from './components/users/frontpage/frontpage';
import { checkLocal } from './store/actionCreators/actiontypes';

interface Iprops {
  getLocal: () => void;
}

function Maincomponent({ getLocal }: Iprops) {
  useEffect(() => {
    getLocal()
  }, [])

  return (
    <Switch>
      <Route path='/'>
        <Frontpage />
      </Route>
      <Route path='/signup'>
        <Screens.Register />
      </Route>
      <Route path='/seller'>
        <Screens.ProfileScreen />
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
  )
}

export default connect(null, { getLocal: checkLocal })(Maincomponent)