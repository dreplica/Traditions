import React from 'react';
import { Front } from '../../../style/navigation';
import Categories from '../categories/categories';
import Search from '../search/search';
import Initial from './initialpage'
import { RightComponent } from '../../../style/categories';
import MakePayment from '../cart/payment'
import { Switch, Route,} from 'react-router-dom';
import Sales from '../categories/allCategories';
import Carts from '../cart/cart';
import SaleRoute from '../sales/sales';

const Frontpage:React.FC = () =>{

  return (
    <Front>
        <Categories />
        <RightComponent>
            <Search />
            <Switch>
              <Route exact path='/home'>
                <Initial url={''}/>
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
              <Route path='/home/sale/:cat/:type'>
                <SaleRoute/>
              </Route> 
              <Route path='/home/payment'>
                <MakePayment/>
              </Route> 
              </Switch> 
        </RightComponent>
    </Front> 
  );
}


export default Frontpage;
