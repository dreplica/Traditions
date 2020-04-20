import React, { MouseEvent, useState } from 'react';
import {Headers} from '../../style/styled' 
import { connect } from 'react-redux';
import { menuView } from '../../store/actionCreators/actiontypes';
import { Modal } from '../../store/reducers/effects';
import prof from '../../img/prof.jpg'
import { FiAlignLeft, FiWatch, FiUser } from "react-icons/fi";
import { Link, useHistory } from 'react-router-dom';

interface MenuView{
  toggleMenu:(args:string)=>void; 
  Menu:string;
}
const Header:React.FC<MenuView> = ({toggleMenu,Menu})=>{
  const [drop, setDrop] = useState<string>('none')
  const history = useHistory();
  const isAdmin = true;
  const auth = true;
  const Shownav = (e:MouseEvent) =>{
    e.preventDefault(); 
    (Menu === 'none')?toggleMenu('block'):toggleMenu('none')
  }
  const showProfile = (e:MouseEvent) =>{
    e.preventDefault();
    (drop === 'none')?setDrop('block'):setDrop('none')
  }
  return (
    <Headers>
      {auth && <div className='profile'>
        <img src={prof} alt='' onClick={showProfile}/>
        <div style={{display:drop}}>
          <ul>
            <Link to={`/history`} onClick={(e)=>{
              showProfile(e)
              history.push('/history') 
            }}><FiWatch/> history</Link> 
            {isAdmin && <Link to={`/admin`} onClick={(e)=>{
              showProfile(e)
              history.push('/admin') 
            }}><FiUser/> Admin</Link>}
          </ul>
        </div>
      </div>} 
        <div className="heading">
          <span>Tradishion <sup>&reg;</sup></span>
          <span onClick={Shownav} className='menu-but'><FiAlignLeft /></span>
        </div>
    </Headers>
  );
}

const mapStateToProps = ({EffectReducers}:{EffectReducers:Modal})=>({
  Menu : EffectReducers.menu
})

export default connect( mapStateToProps,{toggleMenu:menuView})(Header) 
// export default Header;