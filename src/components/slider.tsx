import React, { useState,useEffect } from 'react';
import styled from 'styled-components';



const Slide:React.FC<{}> = () =>{
    const [back, setback] = useState<string>()
    const colors:string[] = ['red','orange','darkcyan','purple']
    useEffect(() => {
        const pict = setInterval(()=>{
            const random:number = Math.floor(Math.random()*5);
            setback(colors[random])
        },3000)
      return () => {
        clearInterval(pict)
      };
    }, [setback,colors])
    return (
        <Slider style={{background:back}}>
        <Image>
            <source src='' title='sliding images'></source>
        </Image>
    </Slider>
  );
}

export default Slide;

export const Slider = styled.div`
  width:80%;
  height:60vh;
`
export const Image = styled.div`
  max-width:100%;
  height:auto;
`

