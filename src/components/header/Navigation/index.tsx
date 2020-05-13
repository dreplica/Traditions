import React, { useEffect } from "react";
import { connect } from "react-redux";
import { itemState } from "../../../store/reducers/items";
import { stateData } from "../../../store/reducers/authentication";
import { menuView } from "../../../store/actionCreators/effects";
import { Modal } from "../../../store/reducers/effects";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import {
  FaStoreAlt,
  FaRegEnvelope,
  FaSignOutAlt,
  FaTags,
  FaGlobeAfrica,
} from "react-icons/fa";

import { ITEMS } from "../../../ReusableComponents/theme/types";
import { Container, Cancel } from "./style";

interface Iprops {
  menu: string;
  auth: string;
  view: (args: "none" | "block" | "flex") => void;
  data: ITEMS[];
}

function Navigation({ menu, view, auth, data }: Iprops) {
  const WINDOW_WIDTH = window.innerWidth;
  useEffect(() => {
    if (window.innerWidth <= 999) {
      view("none");
    }
  }, []);

  useEffect(() => {
    window.onresize = (e: Event) => {
      e.preventDefault();
      window.innerWidth >= 999 ? view("flex") : view("none");
    };
  }, [menu, view, data, auth]);

  const closeAction = () => {
    if (WINDOW_WIDTH >= 999) {
      return;
    }
    view("none");
  };

  const Login = (
    <Link to="/signin" onClick={closeAction}>
      <FaSignOutAlt />
      <span>Login</span>
    </Link>
  );

  return (
    <Container style={{ display: menu }}>
      <Cancel onClick={closeAction}>Close</Cancel>
      <Link to="/" onClick={closeAction}>
        <FaStoreAlt /> <span>Home</span>
      </Link>
      <Link to="/topsales" onClick={closeAction}>
        <FaGlobeAfrica /> Top Sales
      </Link>
      <Link to="/newsales" onClick={closeAction}>
        <FaTags /> New Sales
      </Link>
      <Link to="/cart" onClick={closeAction}>
        <FiShoppingCart />
        <span>
          {" "}
          Cart<sup>{data.length}</sup>
        </span>
      </Link>
      <Link to="/#foot" onClick={closeAction}>
        <FaRegEnvelope />
        <span>Contact</span>
      </Link>
      {!auth.length && Login}
    </Container>
  );
}

const mapStateToProps = ({
  EffectReducers,
  ItemsReducer,
  authenticate,
}: {
  authenticate: stateData;
  EffectReducers: Modal;
  ItemsReducer: itemState;
}) => ({
  menu: EffectReducers.menu,
  auth: authenticate.auth.token,
  data: ItemsReducer.cart,
});

export default connect(mapStateToProps, { view: menuView })(Navigation);
