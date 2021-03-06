import React, { MouseEvent, useState } from 'react';
import { connect } from 'react-redux'; 
import { FiAlignLeft } from "react-icons/fi";

import { menuView } from '../../../../store/actioncreator/effects';
import { Modal } from '../../../../store/reducers/effects';
import prof from '../../../../img/prof.jpg'
import Search from '../../../search';
import { stateData } from '../../../../store/reducers/authentication';
import ProfileDropdown from '../profile';
import {
  Container,
  Content,
  Logo,
  Image
} from './style'


interface Iprops {
  toggleMenu(args: string): void;
  auth?: string;
  Menu: string;
}
function Header(props: Iprops) {
  const [drop, setDrop] = useState<'none' | 'flex'|'block'>('none')

  const Shownav = (e: MouseEvent) => {
    e.preventDefault();
    (props.Menu === 'none') ? props.toggleMenu('flex') : props.toggleMenu('none')
  }


  const showProfile = (e: MouseEvent) => {
    e.preventDefault();
    drop === "none" ? setDrop("block") : setDrop("none");
  };


   const ShowImage = (
    <Image onMouseEnter={showProfile} onMouseLeave={showProfile}>
      <img src={prof} alt="profile-image" />
      <ProfileDropdown drop={drop} />
    </Image>
  );


  return (
    <Container> 
      <Content>
        {props.auth?.length ? ShowImage:null }
        <Logo>
          <span>
            Thradishion&nbsp;<sup>&reg;</sup>
          </span>
          <FiAlignLeft className="menu-but" onClick={Shownav} />
        </Logo>
        <Search />
      </Content>
    </Container>
  );
}

const mapStateToProps = ({ authenticate, EffectReducers }: { authenticate: stateData, EffectReducers: Modal }) => ({
  Menu: EffectReducers.menu,
  auth: authenticate.data?.auth?.token 
})

export default connect(mapStateToProps, { toggleMenu: menuView })(Header)
// export default Header;