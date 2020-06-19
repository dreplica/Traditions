//because i have nav for top sales and new sales
//i decided to use the style in context index to render through category
//i will leave this here just incase i need it later

import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Cards from '../../ReusableComponents/Cards';
import { FiActivity } from 'react-icons/fi';

interface IProps {
    description: string;
    id: string;
    image: string;
    itemname: string;
    price: string;
}

const InitialState: IProps[] = [
    {
        description: "",
        id: "",
        image: "",
        itemname: "",
        price: "",
    }
]

export default function TopSales() {
    const [state, setstate] = useState<IProps[]>(InitialState)
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        (async function () {
            const result = await Axios.get('http://localhost:3000/items/men')
            const Data = getItems(result.data)
            setstate(Data)
            setLoading(false)
        })()
    },[])

    const getItems = (data: any) => {
        const filteredValue = data.map((item: { [key: string]: any }) => ({
            itemname: item.itemname,
            description: item.description,
            image: item.image,
            price: item.price,
            id: item.id
        }))
        return filteredValue
    }

    if (loading) {
        return <FiActivity />
    }

    return state.map((item, index) => <Cards
        description={item.description}
        id={item.id}
        image={item.image}
        itemname={item.itemname}
        price={item.price}
        key={index}
    />)
}
