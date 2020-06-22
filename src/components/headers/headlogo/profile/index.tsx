import React, { MouseEvent } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiUser, FiWatch } from 'react-icons/fi';
import { FaSignOutAlt } from 'react-icons/fa';
import { connect } from 'react-redux';

import { uploading} from '../../../../store/actioncreator/actionfuncs'
import { Container } from './style'
import { Dispatch } from 'redux';

interface Iprops {
    drop: 'hidden' | 'visible';
    removeAuth(obj: { token: string; isadmin: string|number }):void
}

 function ProfileDropdown(props: Iprops) {
    const history = useHistory()

    const logout = (e: MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault()
        props.removeAuth({token:"",isadmin:""})
        delete localStorage['auth'];
        history.push('/signin')
    }


    return (
        <Container style={{ visibility: props.drop }}>
            <Link to={'/Admin'}><FiUser /> <span>Admin</span></Link>
            <Link to={'/History'}><FiWatch /> <span>History</span></Link>
            <a onClick={logout} href='/'><FaSignOutAlt /> <span>Logout</span></a>
        </Container>
    );
}

const mapDispatchToProps = (dispatch:Dispatch) => ({
    removeAuth: (arg: { token: string; isadmin: string|number })=>dispatch(uploading(arg))
})

 

export default connect(null,mapDispatchToProps)(ProfileDropdown)