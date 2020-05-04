import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './style'
import { FiUser, FiWatch } from 'react-icons/fi';
import { FaSignOutAlt } from 'react-icons/fa';

interface Iprops {
    drop: 'hidden' | 'visible';
}

export default function ProfileDropdown(props: Iprops) {

    return (
        <Container style={{ visibility: props.drop }}>
            <Link to={'/Admin'}><FiUser /> <span>Admin</span></Link>
            <Link to={'/History'}><FiWatch /> <span>History</span></Link>
            <Link to={'/signin'}><FaSignOutAlt /> <span>Logout</span></Link>
        </Container>
    );
}

