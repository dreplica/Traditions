import React, { useState, useEffect, MouseEvent } from "react";
import { Link } from "react-router-dom";

import { FiUser, FiWatch } from "react-icons/fi";
import { FaSignOutAlt } from "react-icons/fa";
import { connect } from "react-redux";
import { loadData } from "../../../../store/actionCreators/authenticate";
import { stateData } from "../../../../store/reducers/authentication";
import { Container, Menu } from "./style";

interface Iprops {
  drop: "none" | "block" | "flex";
  admin: string|boolean; 
  removeAuth: (auth: { admin: string; token: string }) => void;
}

function ProfileDropdown(props: Iprops) {
  const [show, setShow] = useState("none");
  useEffect(() => {
    setShow(props.drop);
  }, [props.drop]);

  const logout = (e: MouseEvent) => {
    delete localStorage["auth"];
    props.removeAuth({ admin: "", token: "" });
  };

  return ( 
    <Container style={{ display: show }}>
      { props.admin && <Link to={"/Admin"}>
          <FiUser /> <Menu>Admin</Menu>
        </Link>
      }

      <Link to={"/History"}>
        <FiWatch /> <Menu>History</Menu>
      </Link>
      <Link to={"/signin"} onClick={logout}>
        <FaSignOutAlt /> <Menu>Logout</Menu>
      </Link>
    </Container>
  );
}

const mapStateToProps = ({ authenticate }: { authenticate: stateData }) => {
  return {
    admin: authenticate.auth.admin,
  };
};

export default connect(mapStateToProps, { removeAuth: loadData })(
  ProfileDropdown
);
