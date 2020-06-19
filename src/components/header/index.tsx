import React, { Fragment } from 'react';

import Logo from './HeadLogo/Logo/index'
import Navigation from './Navigation';

export default function Header() {
    return (
        <Fragment>
            <Logo />
            <Navigation />
        </Fragment>
    );
}
