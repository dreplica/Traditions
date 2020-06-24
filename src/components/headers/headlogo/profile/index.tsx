import React, { MouseEvent, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { FiUser, FiWatch } from 'react-icons/fi';
import { FaSignOutAlt } from 'react-icons/fa';

import { logout } from '../../../../store/actioncreator/auth';
import { stateData } from '../../../../store/reducers/authentication';
import { Container, Menu } from "./style";

interface iProps {
    drop: "none" | "block" | "flex";
    admin:string;
    logout():void; 
}

function ProfileDropdown(props: iProps) {
    const [show, setShow] = useState("none");

    useEffect(() => {
        setShow(props.drop);
    }, [props.drop]);

    const logout = (e: MouseEvent) => {
        props.logout();
    };

    return (
        <Container style={{ display: show }}>
            {props.admin === '1' 
            ? <Link to={"/Admin" }>
                <FiUser /> <Menu>Admin</Menu>
            </Link>
            :null
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


const mapStateToProps = ({authenticate}:{authenticate:stateData})=>({
admin:authenticate.data.auth?.isadmin as string
})
 

export default connect(mapStateToProps,{logout})(ProfileDropdown)