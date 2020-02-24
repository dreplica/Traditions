import React from 'react';
import { Front } from '../../style/navigation';
import Categories from './labels/categories';
import Search from './search';
import { RightComponent } from '../../style/categories';
import Slide from './labels/slider';
import OneComponent from './labels/OneComponent';
import { Latest } from '../../style/sales';
import { Switch, Route, useRouteMatch, BrowserRouter as Router } from 'react-router-dom';
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
              <Route path='/home/gg'>
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
              <Route  path='/home/topsales'>
                <Sales />
              </Route>
              <Route  path='/home/newsales'>
                <Sales />
              </Route>
              </Switch>
        </RightComponent>
    </Front>
  );
}


export default Frontpage;

