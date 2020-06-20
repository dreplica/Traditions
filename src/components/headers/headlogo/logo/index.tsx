import React, { MouseEvent, useState } from 'react';
import { connect } from 'react-redux'; 
import { FiAlignLeft } from "react-icons/fi";

import { menuView } from '../../../../store/actioncreator/actiontypes';
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


interface MenuView {
  toggleMenu(args: string): void;
  auth?: string;
  Menu: string;
}
function Header(props: MenuView) {
  const [drop, setDrop] = useState<'hidden' | 'visible'>('hidden')
  const auth = true;

  const Shownav = (e: MouseEvent) => {
    e.preventDefault();
    (props.Menu === 'none') ? props.toggleMenu('flex') : props.toggleMenu('none')
  }
  const showProfile = (e: MouseEvent) => {
    e.preventDefault();
    (drop === 'hidden') ? setDrop('visible') : setDrop('hidden')
  }

  const ShowImage = <Image>
    <img src={prof} alt='' onClick={showProfile} />
  </Image>


  return (
    <Container>
      <Content>
        {props.auth?.length ? ShowImage : null}
        <Logo>
          <span>
            Thradishion&nbsp;<sup>&reg;</sup>
          </span>
          <FiAlignLeft className="menu-but" onClick={Shownav} />
        </Logo>
        <Search />
      </Content>
      <ProfileDropdown drop={drop} />
    </Container>
  );
}

const mapStateToProps = ({ ItemsReducer, EffectReducers }: { ItemsReducer: stateData, EffectReducers: Modal }) => ({
  Menu: EffectReducers.menu,
  auth: ItemsReducer.data?.auth?.token
})

export default connect(mapStateToProps, { toggleMenu: menuView })(Header)
// export default Header;