import React, { MouseEvent, useState } from "react";
import { connect } from "react-redux";
import { FiAlignLeft } from "react-icons/fi";

import { menuView } from "../../../../store/actionCreators/effects";
import { Modal } from "../../../../store/reducers/effects";
import prof from "../../../../img/prof.jpg";
import ProfileDropdown from "../Profile";
import Search from "../../../search";
import { Container, Content, Logo, Image } from "./style";
import { stateData } from "../../../../store/reducers/authentication";

interface MenuView {
  toggleMenu: (args: "none" | "block"|"flex") => void;
  Menu: string;
  auth:string;
}

function Header(props: MenuView) {
  const [drop, setDrop] = useState<"none" | "block"|"flex">("none");
  const auth = true;

  const Shownav = (e: MouseEvent) => {
    e.preventDefault();
    props.Menu === "none" ? props.toggleMenu("flex") : props.toggleMenu("none");
  };
  const showProfile = (e: MouseEvent) => {
    e.preventDefault();
    drop === "none" ? setDrop("block") : setDrop("none");
  };

  const ShowImage = (
    <Image onMouseEnter={showProfile} onMouseLeave={showProfile}>
      <img src={prof} alt="" />
      <ProfileDropdown drop={drop} />
    </Image>
  );

  return (
    <Container>
      <Content>
        {props.auth.length ? ShowImage:null}
        <Logo>
          <span>
            Thradishion&nbsp;<sup>&reg;</sup>
          </span>
            <FiAlignLeft className="menu-but" onClick={Shownav}/>
        </Logo>
        <Search />
      </Content>
    </Container>
  );
}

const mapStateToProps = ({ EffectReducers,authenticate}: { EffectReducers: Modal,authenticate:stateData }) => ({
  Menu: EffectReducers.menu,
  auth:authenticate.auth.token
});

export default connect(mapStateToProps, { toggleMenu: menuView })(Header);
// export default Header;
