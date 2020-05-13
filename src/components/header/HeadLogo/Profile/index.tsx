import React, { useState, useEffect, MouseEvent } from "react";
import { Link } from "react-router-dom";

import { Container, Menu } from "./style";
import { FiUser, FiWatch } from "react-icons/fi";
import { FaSignOutAlt } from "react-icons/fa";

interface Iprops {
  drop: "none" | "block"|"flex";
}

export default function ProfileDropdown(props: Iprops) {
  const [show, setShow] = useState("none");
  useEffect(()=>{
    setShow(props.drop)
  },[props.drop])

  const logout = (e:MouseEvent) => {
    delete localStorage['auth']
  };

  return (
    <Container style={{ display: show }}>
      <Link to={"/Admin"}>
        <FiUser /> <Menu>Admin</Menu>
      </Link>

      <Link to={"/History"}>
        <FiWatch /> <Menu>History</Menu>
      </Link>
      <Link to={"/signin"} onClick={logout}>
        <FaSignOutAlt /> <Menu>Logout</Menu>
      </Link>
    </Container>
  );
}
