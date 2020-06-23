import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Cards from '../../../reusablecomponent/cards';
import { FiActivity } from 'react-icons/fi';
import { ItemContainer } from './style';
import { initialItems, ITEMS } from '../../../reusablecomponent/theme/types';

interface IProps {
    items: ITEMS[];
}


//i stopped here, about to partition value

export default function Items(props: IProps) {
    const [state, setstate] = useState({
        items:[initialItems],
        loading:false
    })

    useEffect(() => {
        
    },[])



    if (state.loading) {
        return <FiActivity />
    }

    const item = state.items.map((item, index) => <Cards
        description={item.description}
        id={item.id} 
        image={item.image}
        itemname={item.itemname}
        price={item.price}
        key={index}
    />)

    return <ItemContainer>{item}</ItemContainer>
}
