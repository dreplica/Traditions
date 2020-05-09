import React, { MouseEvent, useState } from 'react';
import { connect } from 'react-redux';
import { FiAlignLeft} from "react-icons/fi";

import { menuView } from '../../../../store/actionCreators/actiontypes';
import { Modal } from '../../../../store/reducers/effects';
import prof from '../../../../img/prof.jpg'
import ProfileDropdown from '../Profile';
import {
  Container,
  Content,
  Logo,
  Image
} from './style' 
import Search from '../../../search';


interface MenuView{
  toggleMenu:(args:string)=>void; 
  Menu:string;
}
function Header(props:MenuView){
  const [drop, setDrop] = useState<'hidden'|'visible'>('hidden')
  const auth = true;

  const Shownav = (e:MouseEvent) =>{
    e.preventDefault(); 
    (props.Menu === 'none')?props.toggleMenu('flex'):props.toggleMenu('none')
  }
  const showProfile = (e:MouseEvent) =>{
    e.preventDefault();
    (drop === 'hidden')?setDrop('visible'):setDrop('hidden')
  }

  const ShowImage = <Image>
    <img src={prof} alt='' onClick={showProfile}/>
  </Image>


  return (
    <Container>
      <Content>
        {auth && ShowImage } 
          <Logo>
            <span>Tradishion <sup>&reg;</sup></span>
            <span onClick={Shownav} className='menu-but'><FiAlignLeft /></span>
        </Logo>
        <Search />
      </Content>
      <ProfileDropdown drop={drop}/>
    </Container>
  );
}

const mapStateToProps = ({EffectReducers}:{EffectReducers:Modal})=>({
  Menu : EffectReducers.menu
})

export default connect( mapStateToProps,{toggleMenu:menuView})(Header) 
// export default Header;