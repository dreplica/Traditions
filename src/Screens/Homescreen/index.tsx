import React from 'react';

import ContextLayer from './context';
import Slide from '../../components/slide';
import { Container } from "./style";

export default function Homepage() {

    return (
        <Container> 
            <Slide />
            <ContextLayer />
        </Container>
    )
}
