import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { FiActivity } from 'react-icons/fi';

import SpreadContent from '../../reusablecomponents/spread';
import img1 from '../../img/agba2.jpg'
import img2 from '../../img/back.jpg'
import img3 from '../../img/mshirt.jpg'
import img4 from '../../img/shirt.jpg'
import img5 from '../../img/womgowncan.jpg'
import img6 from '../../img/skirt.jpg'

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
        image: img1,
        itemname: "carem",
        price: "400",
    },
    {
        description: "",
        id: "",
        image: img2,
        itemname: "shazam",
        price: "500",
    },
    {
        description: "",
        id: "",
        image: img3,
        itemname: "wuhan",
        price: "600",
    },
    {
        description: "",
        id: "",
        image: img4,
        itemname: "surcharge",
        price: "700",
    },
    {
        description: "",
        id: "",
        image: img5,
        itemname: "amplified",
        price: "900",
    },
    {
        description: "",
        id: "",
        image: img6,
        itemname: "contain",
        price: "800",
    },
];


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
