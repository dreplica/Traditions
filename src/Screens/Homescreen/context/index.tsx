import React, { Fragment } from 'react';

import {
    Container,
    Heading
} from "./style";
import Items from './Items';

const ITEMS_TO_DISPLAY = ['Men','Women','shoe']
const HEADER = ['Men\'s wear','Women\'s wear','Foot wears']

export default function ContextLayer() {
    
    const Display = ITEMS_TO_DISPLAY.map((item, index) => <Container key={index}>
        <Heading>{HEADER[index]}</Heading>
        <Items category={item}/>
    </Container>)

    return (
        <Fragment>
           {Display}
        </Fragment>
    );
}
