import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { itemState, objectData } from '../../../store/reducers/items';
import { stateData } from '../../../store/reducers/authentication';
import { menuView } from '../../../store/actionCreators/actiontypes';
import { Modal } from '../../../store/reducers/effects';
import { Link } from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi';
import { FaStoreAlt, FaRegEnvelope, FaSignOutAlt, FaTags, FaGlobeAfrica } from 'react-icons/fa';

import { Nav } from './style';

interface Iprops {
  menu: string;
  auth: string;
  view: (args: string) => void;
  data: objectData[]
}


function Navigation({ menu, view, auth, data }: Iprops) {
  const WINDOW_WIDTH = window.innerWidth;
  useEffect(() => {
    if (window.innerWidth <= 999) {
      view('none')
    }
  }, [])

  useEffect(() => {
    window.onresize = (e: Event) => {
      e.preventDefault();
      (window.innerWidth >= 999) ? view('flex') : view('none');
    }
  }, [menu, view, data, auth])

  const closeAction = () => {
    if (WINDOW_WIDTH >= 999) {
      return
    }
    view('none')
  }

  const Login = <Link to='/signin' onClick={closeAction}><FaSignOutAlt /><span>Login</span></Link>

  return (
    <Nav style={{ display: menu }}>
      <Link to='/home' onClick={closeAction}><FaStoreAlt /> <span>Home</span></Link>
      <Link to='/home/topsales' onClick={closeAction}><FaGlobeAfrica /> Top Sales</Link>
      <Link to='/home/newsales' onClick={closeAction}><FaTags /> New Sales</Link>
      <Link to='/home/cart' onClick={closeAction}><FiShoppingCart /><span> Cart<sup>{data.length}</sup></span></Link>
      <Link to='/#foot' onClick={closeAction}><FaRegEnvelope /><span>Contact</span></Link>
      {!auth && Login}
    </Nav>
  );
}

const mapStateToProps = ({ EffectReducers, ItemsReducer, authenticate }: { authenticate: stateData; EffectReducers: Modal, ItemsReducer: itemState }) => ({
  menu: EffectReducers.menu,
  auth: authenticate.data?.auth?.token as string,
  data: ItemsReducer.cart
})

export default connect(mapStateToProps, { view: menuView })(Navigation)
