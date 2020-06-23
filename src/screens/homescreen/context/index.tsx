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


interface iProps {
    data: ITEMS[],
    getRequest(arg: string): void;
}

interface category {
    "Men's wear": ITEMS[];
    "Women's wear": ITEMS[];
    "Foot wear": ITEMS[];
}

const ContextLayer = (props: iProps) => {

    const [state, setstate] = useState<category>({
        "Men's wear": [],
        "Women's wear": [],
        "Foot wear": [],
    })


    useEffect(() => {
        if (!props.data[0].id) {
            props.getRequest('items')
        }

        if (props.data[0].id) {
            partition()
        }

    }, [props.data])

    const partition = async () => {
            props.data.forEach((item: ITEMS) => {
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

const mapStateToProps = ({ ItemsReducer }: { ItemsReducer: itemState }) => ({
    data: ItemsReducer.data
})


export default connect(mapStateToProps, { getRequest })(ContextLayer)