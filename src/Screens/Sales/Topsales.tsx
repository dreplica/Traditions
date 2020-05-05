import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { FiActivity } from 'react-icons/fi';

import Cards from '../../ReusableComponents/Cards';
import {
    Container
} from './style'

interface IProps {
    desc: string;
    id: string;
    image: string;
    name: string;
    price: string;
}

const InitialState: IProps[] = [
    {
        desc: "",
        id: "",
        image: "",
        name: "",
        price: "",
    }
]

export default function Topsales() {
    const [state, setstate] = useState<IProps[]>(InitialState)
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        (async function () {
            const result = await Axios.get('http://localhost:3000/items')
            const Data = getItems(result.data)
            setstate(Data)
            setLoading(false)
        })()
    })

    const getItems = (data: any) => {
        const filteredValue = data.map((item: { [key: string]: any }) => ({
            name: item.name,
            desc: item.desc,
            image: item.image,
            price: item.price,
            id: item.id
        }))
        return filteredValue
    }

    if (loading) {
        return <FiActivity />
    }

    const items = state.map((item, index) => <Cards
        desc={item.desc}
        id={item.id}
        image={item.image}
        name={item.name}
        price={item.price}
        key={index}
    />)

    return (
        <Container>
            {items}
        </Container>
    )
}
