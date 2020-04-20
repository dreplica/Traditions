import React,{useEffect} from 'react';
import { Front } from '../../../style/navigation';
import Categories from '../categories/categories';
import Search from '../search/search';
import Initial from './initialpage'
import { RightComponent } from '../../../style/categories';
import MakePayment from '../cart/payment'
import { Switch, Route, useHistory,} from 'react-router-dom';
import Sales from '../categories/allCategories';
import Carts from '../cart/cart';
import SaleRoute from '../sales/sales';
import SearchDisplay from '../search/searchDisplay';
import { connect } from 'react-redux';
import { stateData } from '../../../store/reducers/authentication';

interface Iprops{
  auth: string;
}
function Frontpage(props:Iprops) {
  const history = useHistory()
  useEffect(() => {
    if (!props.auth) {
      history.push('/')
    }
  }, [props.auth,history])
  return (
    <Front>
        <Categories />
        <RightComponent>
            <Search />
            {/* search is here */}
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
              {/* <Route path='/home/search/:id'>
                  <SearchDisplay/>
                </Route> */}
              </Switch> 
        </RightComponent>
    </Front> 
  );
}

const mapStateToProp = ({authenticate}:{authenticate:stateData}) => ({
  auth:authenticate.data?.auth?.token as string
})

export default connect(mapStateToProp)(Frontpage)
