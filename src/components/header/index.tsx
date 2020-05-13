import React from 'react';

import Logo from './HeadLogo/Logo/index'
import Navigation from './Navigation';
import {Container} from './style'

export default function Header() {
    return (
        <Container >
            <Logo />
            <Navigation />
        </Container>
    );
}
