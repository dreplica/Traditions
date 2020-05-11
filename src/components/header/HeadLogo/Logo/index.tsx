import React, { MouseEvent, useState } from "react";
import { connect } from "react-redux";
import { FiAlignLeft } from "react-icons/fi";

import { menuView } from "../../../../store/actionCreators/effects";
import { Modal } from "../../../../store/reducers/effects";
import prof from "../../../../img/prof.jpg";
import ProfileDropdown from "../Profile";
import Search from "../../../search";
import { Container, Content, Logo, Image } from "./style";

interface MenuView {
  toggleMenu: (args: "none" | "block"|"flex") => void;
  Menu: string;
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
        {auth && ShowImage}
        <Logo>
          <span>
            Tradishion&nbsp;<sup>&reg;</sup>
          </span>
            <FiAlignLeft className="menu-but" onMouseEnter={Shownav} />
        </Logo>
        <Search />
      </Content>
    </Container>
  );
}

const mapStateToProps = ({ EffectReducers }: { EffectReducers: Modal }) => ({
  Menu: EffectReducers.menu,
});

export default connect(mapStateToProps, { toggleMenu: menuView })(Header);
// export default Header;
