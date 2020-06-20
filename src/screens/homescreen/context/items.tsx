import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Cards from '../../../reusablecomponent/cards';
import { FiActivity } from 'react-icons/fi';
import { ItemContainer } from './style';

interface IProps {
    category: string;
}

interface State {
    description: string;
    id: string;
    image: string;
    itemname: string;
    price: string;
}

const InitialState: State[] = [
    {
        description: "",
        id: "",
        image: "",
        itemname: "",
        price: "",
    }
]

export default function Items(props: IProps) {
    const [state, setstate] = useState<State[]>(InitialState)
    const [loading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        (async function () {
            const result = await Axios.get(`http://localhost:3000/items/${props.category}`)
            const Data = getItems(result.data)
            setstate(Data)
            setLoading(false)
        })()
        console.log(state)
    },[])

    const getItems = (data: any) => {
        const renderData = [...data]
        renderData.length = 10;
        const filteredValue = renderData.map((item: { [key: string]: any }) => ({
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

    const item = [0,0,0,0,0,0,0,0,0,0].map((item, index) => <Cards
        description="{item.description}"
        id="{item.id}"
        image="{item.image}"
        itemname="Ankara"
        price="2000"
        key={index}
    />)

    return <ItemContainer>{item}</ItemContainer>
}
