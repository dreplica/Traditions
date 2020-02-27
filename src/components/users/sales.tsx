import React from 'react';
import { Switch,Route} from 'react-router-dom';
import Sales from './allCategories';
import { RightComponent } from '../../style/categories';

interface props{

}

const SaleRoute: React.FC<props> = ({}) => {
  return (
    <RightComponent>
        <Switch>
                <Route path='/home/sale/women/:type'>
                    <Sales />
                </Route>
                <Route path='/home/sale/men/:type'>
                  <Sales />
                </Route>
                <Route path='/home/sale/access/:type'>
                  <Sales />
                </Route> 
                <Route path='/home/sale/wfoot/:type'>
                  <Sales />
                </Route>
                <Route path='/home/sale/mfoot/:type'>
                  <Sales />
                </Route>
        </Switch>
    </RightComponent>
  );
}


export default SaleRoute