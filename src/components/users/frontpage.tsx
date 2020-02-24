import React from 'react';
import { Front } from '../../style/navigation';
import Categories from './labels/categories';
import Search from './search';
import { RightComponent } from '../../style/categories';
import Slide from './labels/slider';
import OneComponent from './labels/OneComponent';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import Sales from './allCategories';

const Frontpage:React.FC = () =>{


const arr = Array.from({length:4},(x)=>x=1)
const spread = arr.map((x,i)=><OneComponent key={i} image={""} desc={""} name={"Hover Agbada"} price="&#8358;10,000"/>)
  return (
    <Front>
        <Categories />
        <RightComponent>
            <Search />
            <Switch>
              <Route exact path='/s'>
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
              </Route>
              <Route path='/home/topsales'>
                <Sales />
              </Route>
            </Switch>
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
  flex-wrap:wrap;
  justify-content:space-around;
  align-items:center;

`