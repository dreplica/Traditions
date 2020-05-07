import React, { useState, useEffect } from "react";
import Axios from "axios";
import { objectData } from "../../../store/reducers/items";
import AddReview from "./addReview";
import { Reviews } from "./style";

interface Iprops {
    id: string,
    token: string
}

export default function Review({ id, token }: Iprops) {
    const [reviews, setReviews] = useState<objectData[]>([])
    console.log('review')
    useEffect(() => {
        Axios.get(`http://localhost:3000/reviews/${id}`, {
            headers: {
                authorization: `Bearer ${token}`
            }
        }).then((res) => setReviews(res.data))//get just the location
    }, [])
    return (
        <Reviews>
        <AddReview id={id} />
        <div className='reviews' >
            {
                [',', ',', ',', ',',].map((_, index) => <div key={index} id='review' >
                    <h3>username </h3>
                    <p> very interesting cloths they sell, i want to order more </p>
                </div>)
                }
                    </div>
            </Reviews>
)
}
