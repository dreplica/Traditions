import React, { useState, useEffect } from 'react';
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
        setstate({...state,items:props.items})
    },[])
    

    if (state.loading) {
        return <FiActivity />
    }

    const item =props.items.map((item, index) => <Cards
        item={item}  
        key={index}
    />)

 
    return <ItemContainer>{item}</ItemContainer>

}
