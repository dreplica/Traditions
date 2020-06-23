import React, { Fragment, useState, useEffect, useCallback, useMemo } from 'react';
import Axios from 'axios';
import { connect } from 'react-redux';

import Items from './items';
import { ITEMS } from '../../../reusablecomponent/theme/types';
import { itemState } from '../../../store/reducers/items';
import { getRequest } from '../../../store/actioncreator/item';
import {
    Container,
    Heading
} from "./style";


// interface iProps {
//     data: ITEMS[],
//     getRequest(arg: string): void;
// }

interface category {
    "Men's wear": ITEMS[];
    "Women's wear": ITEMS[];
    "Foot wear": ITEMS[];
}

export default function ContextLayer (){

    const [state, setstate] = useState<category>({
        "Men's wear": [],
        "Women's wear": [],
        "Foot wear": [],
    })


    useEffect(() => {
        partition()
    }, [])

    const partition = async () => {
        const { data } = await Axios('http://localhost:3000/items')
        data.forEach((item: ITEMS) => { 
            switch (item.category) {
                case 'men':
                    return setstate((prev) => ({
                        ...prev,
                        "Men's wear": [...prev["Men's wear"], item]
                    }))

                case 'women':
                    return setstate((prev) => ({
                        ...prev,
                        "Women's wear": [...prev["Women's wear"], item]
                    }))
                case 'womenfoot' || 'menfoot':
                    return setstate((prev) => ({
                        ...prev,
                        "Foot wear": [...prev["Foot wear"], item]
                    }))
                default:
                    return
            }
        })
    }


    type keys = keyof category

    const keyValue: keys[] = Object.keys(state) as unknown as keys[]

    const Display = keyValue.map((item: keys, index) => <Container key={index}>
        <Heading>{item}</Heading>
        <Items items={state[item]} />
    </Container>)

    return (
        <Fragment>
            {Display}
        </Fragment>
    );
}

// const mapStateToProps = ({ ItemsReducer }: { ItemsReducer: itemState }) => ({
//     data: ItemsReducer.data
// })


// export default connect(mapStateToProps, { getRequest })(ContextLayer)