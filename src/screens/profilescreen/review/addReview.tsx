import React, { useRef, MouseEvent } from 'react';
import Axios from 'axios';

import { Addreview } from './style';

export default function AddReview({ id }: { id: string }){
    const ref = useRef<HTMLTextAreaElement>(null)
    
    const addto_review = (e: MouseEvent) => {
        Axios.post(`http://localhost:3000/reviews/${id}`, {
            review: ref.current?.value
        })
    }

    return (
        <Addreview>
            <label>
                Write  Review
            <textarea ref={ref} > </textarea>
            </label>
            <button onClick={addto_review}> Comment </button>
        </Addreview>
                    )
}