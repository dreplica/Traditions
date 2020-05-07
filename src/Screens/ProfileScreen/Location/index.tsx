import React, { Fragment, useState, useRef, useEffect } from "react";
import mapboxgl from 'mapbox-gl'
import Axios from "axios"
import getPoint from "./Mapconfig"

interface Iprops{
    id: string,
    token: string
}

export default function Location({ id, token }:Iprops){
    const [location, setLocation] = useState<string>("coordinate")
    const ref = useRef<HTMLDivElement>(null)
    console.log('location')
    useEffect(() => {
        Axios.get(`http://localhost:3000/user/${id}`, {
            headers: {
                authorization: `Bearer ${token}`
            }
        }).then((res) => setLocation(res.data))//get just the location
        mapboxgl.accessToken = `pk.eyJ1IjoiZHJlcGxpY2EiLCJhIjoiY2p6OXV6eTM3MDBwaTNucnRkZm44MjZjayJ9.W3_lNRKchA62E0LFtQ9icg`
        const map = new mapboxgl.Map({
            container: "mapp",
            style: 'mapbox://styles/mapbox/streets-v11'
        });
        getPoint(map)
    }, [])

    return (
        <Fragment>
            map
            <div id='mapp' ref={ref} > </div>
        </Fragment>
    )
}