import React from 'react';
import { Nav } from '../../style/navigation';

const Navigation =()=> {
  return (
    <>
    <Nav>
        <div className="close">X</div> 
        <ul>
            <li><a href='/'>Home</a></li>
            <li><a href='/'>Categories</a></li>
            <li><a href='/'>Top Sales</a></li>
            <li><a href='/'>New Sales</a></li>
            <li><a href='/'>Cart<sup>10</sup></a></li>
            <li><a href='/'>Contact</a></li>
        </ul>
    </Nav>
    </>
  );
}


export default Navigation