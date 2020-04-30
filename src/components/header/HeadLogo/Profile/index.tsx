import React from 'react';
import { Link } from 'react-router-dom';

import {Container} from './style'
import { FiUser, FiWatch } from 'react-icons/fi';

interface Iprops{
    drop:'hidden'|'visible';
}

export default function ProfileDropdown(props:Iprops) {
    
    return (
        <Container style={{ visibility: props.drop }}>
            <Link to={'/Admin'}><FiUser /> Admin</Link>
            <Link to={'/History'}><FiWatch /> History</Link>
      </Container> 
  );
}



//   <div style={{display:drop}}>
//           <ul>
//             <Link to={`/history`} onClick={(e)=>{
//               showProfile(e)
//               history.push('/history') 
//             }}><FiWatch/> history</Link> 
//             {isAdmin && <Link to={`/admin`} onClick={(e)=>{
//               showProfile(e)
//               history.push('/admin') 
//             }}><FiUser/> Admin</Link>}
//           </ul>
//         </div>