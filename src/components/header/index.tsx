import React, { Fragment } from 'react';

import Logo from './HeadLogo/Logo/index'
import Navigation from './Navigation';
import Cards from '../../ReusableComponents/Cards';
export default function Header() {
    return (
        <Fragment>
            <Logo />
            <Navigation />
            <Cards
                image="string"
                name="hello"
                price='10'
                desc="talking"
                id="2"
            />
        </Fragment>
    );
}
