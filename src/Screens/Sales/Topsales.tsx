import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { FiActivity } from 'react-icons/fi';

import SpreadContent from '../../ReusableComponents/Spread';

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
        id: "t",
        image: "",
        itemname: "prop gen",
        price: "",
    },
    {
        description: "",
        id: "t",
        image: "",
        itemname: "prop gen",
        price: "",
    },
    {
        description: "",
        id: "t",
        image: "",
        itemname: "prop gen",
        price: "",
    },
    
]

export default function Topsales() {
    const [state, setstate] = useState<IProps[]>(InitialState)
    const [loading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        (async function () {
            const result = await Axios.get('http://localhost:3000/history')
            // i need to reference a route that provides topsales from express
            const Data = getItems(result.data)
            setstate(Data)
            setLoading(false)
        })()
    })

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


    return <SpreadContent data={state} />
}
