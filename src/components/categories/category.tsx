import React, { useState, MouseEvent } from 'react';

import Data from "../../util/categories.json";
import CategoryItem from ".";
import {
    Container,
    Content
} from './style'

export interface dropdown{
    women:string;
    men:string;
    access:string;
    wfoot:string;
    mfoot:string;
}

const dropit:dropdown = {
    women:"none",
    men:"none",
    access:"none",
    wfoot:"none",
    mfoot:"none",
}

type List = ["Women", "Men", "Accessories", "Women Foot Wears", "Men Foot Wears"]

export default function Categories(){
    const [drop, setdrop] = useState<dropdown>(dropit)
    const handleDrop = (e:MouseEvent)=>{
        e.preventDefault();
        console.log("hello")
        const classy = e.currentTarget.className
        classy === "none"?setdrop({...drop,[e.currentTarget.id]:'block'}):setdrop({...drop,[e.currentTarget.id]:'none'})
        console.log(drop)
    }

    const DataList:List = Object.keys(Data) as List
    console.log(DataList)

  return (
      <Container>
          <Content>Category</Content>
          {
              DataList.map((item, index) => <CategoryItem
                  key={index}
                  name={item}
                  list={Data[item].list}
              />)
          }
    </Container>
  );
}
