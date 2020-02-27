import React,{useEffect} from 'react';
import { Front } from '../../../style/navigation';
import Categories from './categories';
import Search from '../labels/search';
import Initial from './initialpage'
import { RightComponent } from '../../../style/categories';
import OneComponent from '../labels/OneComponent';
import { Latest } from '../../../style/sales';
import { Switch, Route, useRouteMatch,useParams } from 'react-router-dom';
import Sales from './allCategories';
import Carts from './cart';
import SaleRoute from '../labels/sales';

const Frontpage:React.FC = () =>{

  return (
    <Front>
        <Categories />
        <RightComponent>
            <Search />
            <Switch>
              <Route exact path='/home'>
                <Initial url={'jj'}/>
              </Route>
              <Route path='/home/topsales'>
                <Sales url={`http://localhost:3000/items/`}/>
              </Route>
              <Route path='/home/newsales'>

                <Sales url={`http://localhost:3000/items/`}/>
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
