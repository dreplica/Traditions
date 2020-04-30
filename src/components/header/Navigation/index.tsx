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

interface Iprops{
  menu: string;
  auth: string;
  view: (args: string) => void;
  data: objectData[]
}
function  Navigation({menu,view,auth,data}:Iprops){
  useEffect(() => {
    window.onresize = (e:Event)=>{
      e.preventDefault(); 
      (window.innerWidth >= 999)? view('block'):view('none');
    }
  }, [menu, view, data, auth])
  
  const Login = <li><a href='/signin'><FaSignOutAlt/><span>Login</span></a></li>

  return (<Nav style={{display:menu}}> 
        <ul>
            <li><Link to='/home'><FaStoreAlt /> <span>Home</span></Link></li>
            <li><Link to='/home/topsales'><FaGlobeAfrica/> Top Sales</Link></li> 
            <li><Link to='/home/newsales'><FaTags/> New Sales</Link></li>   
            <li><Link to='/home/cart'><FiShoppingCart/><span> Cart<sup>{data.length}</sup></span></Link></li>
      <li><a href='#foot'><FaRegEnvelope /><span>Contact</span></a></li>
      {!auth && Login}
        </ul>
    </Nav>
  );
}

const mapStateToProps = ({EffectReducers,ItemsReducer,authenticate}:{authenticate:stateData; EffectReducers:Modal,ItemsReducer:itemState})=>({
  menu:EffectReducers.menu,
  auth:authenticate.data?.auth?.token as string,
  data:ItemsReducer.cart
})

export default connect(mapStateToProps,{view:menuView})(Navigation)
