import React,{useEffect} from 'react';
import { Front } from '../../style/navigation';
import Categories from './labels/categories';
import Search from './search';
import Initial from './labels/initialpage'
import { RightComponent } from '../../style/categories';
import Slide from './labels/slider';
import OneComponent from './labels/OneComponent';
import { Latest } from '../../style/sales';
import { Switch, Route } from 'react-router-dom';
import Sales from './allCategories';
import Carts from './labels/cart';
import SaleRoute from './sales';

const Frontpage:React.FC = () =>{
  return (
    <Front>
        <Categories />
        <RightComponent>
            <Search />
            <Switch>
              <Route exact path='/home'>
                <Initial/>
              </Route>
              <Route path='/home/topsales'>
                <Sales />
              </Route>
              <Route path='/home/newsales'>
                <Sales />
              </Route> 
              <Route path='/home/cart'>
                <Carts/>
              </Route> 
              <Route path='/home/sale'>
                <SaleRoute/>
              </Route> 
              </Switch> 
        </RightComponent>
    </Front>
  );
}


export default Frontpage;
