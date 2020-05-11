import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Container, Menu, Cancel } from "./style";
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

  const hide = () => {
    // setDisplay("hidden")
    setShow("hidden");
  };

  return (
    <Container style={{ display: show }}>
      <Cancel onClick={hide}>Close</Cancel>
      <Link to={"/Admin"} onClick={hide}>
        <FiUser /> <Menu>Admin</Menu>
      </Link>

      <Link to={"/History"} onClick={hide}>
        <FiWatch /> <Menu>History</Menu>
      </Link>
      <Link to={"/signin"} onClick={hide}>
        <FaSignOutAlt /> <Menu>Logout</Menu>
      </Link>
    </Container>
  );
}
