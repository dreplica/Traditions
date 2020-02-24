import React from 'react';
import OneComponent from './labels/OneComponent';
import { Latest } from './frontpage';

const Sales: React.FC<{}> = () => {
    console.log("hello")
    const arr = Array.from({length:50},()=>1)
    const Spread = arr.map((x,i)=><OneComponent key={i} image={""} desc={""} name={"Hover Agbada"} price="&#8358;10,000"/>)
  return (
    <Latest>
        {Spread}
    </Latest>
  );
}

export default Sales