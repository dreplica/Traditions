import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux';

import Screens from '../Screens/index'
import Frontpage from '../components/users/frontpage/frontpage';
import { checkLocal } from '../store/actionCreators/actiontypes';
import Categories from '../components/categories/category';
import {
  Container
} from './style'

interface Iprops {
  getLocal: () => void;
}

function Maincomponent({ getLocal }: Iprops) {
  useEffect(() => {
    getLocal()
  }, [])

  return (
    <Container>
      <Categories />
      <Switch>
        <Route exact path='/'>
          <Screens.Homepage />
        </Route>
        <Route path='/items'>
          <Frontpage />
        </Route>
        <Route path='/sale/:category/:type'>
          <Screens.Sales.Salesroutes />
        </Route>
        <Route path='/topsales'>
          <Screens.Sales.Topsales />
        </Route>
        <Route path='/newsales'>
          <Screens.Sales.Newsales />
        </Route>
        <Route path='/cart'>
          <Screens.Cart />
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
    </Container>
  )
}

export default connect(null, { getLocal: checkLocal })(Maincomponent)