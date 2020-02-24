import React, { MouseEvent } from 'react';
import {Headers} from '../../style/styled' 
import { connect } from 'react-redux';
import { menuView } from '../../store/actionCreators/actiontypes';
import { Modal } from '../../store/reducers/effects';
import menu from '../../img/menu1.svg'
import { FiAlignLeft } from "react-icons/fi";

interface MenuView{
  toggleMenu:(args:string)=>void; 
  Menu:string;
}
const Header:React.FC<MenuView> = ({toggleMenu,Menu})=>{
  const Shownav = (e:MouseEvent) =>{
    e.preventDefault(); 
    (Menu === 'none')?toggleMenu('block'):toggleMenu('none')
  }
  return (
    <Headers>
        <div>
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