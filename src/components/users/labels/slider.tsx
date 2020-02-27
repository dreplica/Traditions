import React, { useState,useEffect } from 'react';
import styled from 'styled-components';
import four from '../../../img/four.jpg'
import tre from '../../../img/tre.jpg'
import one from '../../../img/one.jpg'

const Slide:React.FC<{}> = () =>{
    const [back, setback] = useState<string>()
    const colors:string[] = [four,tre,one]
    useEffect(() => {
        const pict = setInterval(()=>{
            const random:number = Math.floor(Math.random()*3);
            setback(colors[random])
        },3000)
      return () => {
        clearInterval(pict)
      };
    }, [setback,colors])
    return (
        <Slider>
            <img src={back} alt='sliding images'></img>
      </Slider>
  );
}

export default Slide;

export const Slider = styled.div`
  min-width:80%;
  max-width:80%;
  min-height:30vh;
  max-height:60vh;
  margin:25px auto;

    img{
      width:100%;
      min-height:30vh;
      max-height:60vh;
    }
`

