import React, { Fragment } from 'react';

import Logo from './headlogo/logo/index'
import Navigation from './navigation';

export default function Header() {
    return (
        <Fragment>
            <Logo />
            <Navigation />
        </Fragment>
    );
}
