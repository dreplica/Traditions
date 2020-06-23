import React from 'react';
import styled from 'styled-components'


interface iProps{
    src:string
}

export default function Images(props:iProps) {
  return (
    <Image  src={props.src} />
  );
}


const Image = styled.img`
    width:100%;
    height:100%;
`;