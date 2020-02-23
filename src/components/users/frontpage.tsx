import React from 'react';
import { Front } from '../header/navigation';
import Categories from './categories';
import Search from './search';
import { RightComponent } from '../../style/categories';
import Slide from './labels/slider';
import OneComponent from './labels/OneComponent';
import styled from 'styled-components';

const Frontpage:React.FC = () =>{


const arr = Array.from({length:4},(x)=>x=1)
const spread = arr.map((x,i)=><OneComponent key={i} image={""} desc={""} name={"Hover Agbada"} price="&#8358;10,000"/>)
  return (
    <Front>
        <Categories />
        <RightComponent>
            <Search />
            <Slide/>
              <h2>Top Sales</h2>
            <Latest>
              {spread}
            </Latest>
              <h2>New Sales</h2>
            <Latest>
              {spread}
            </Latest>
              <h2>Suggestion</h2>
            <Latest>
              {spread}
            </Latest>
        </RightComponent>
    </Front>
  );
}


export default Frontpage;

export const Latest = styled.div`
  width:90%;
  margin:auto;
  display:flex;
  flex-direction:row;
  flex-wrap:nowrap;
  justify-content:space-around;
  align-items:center;

    
`