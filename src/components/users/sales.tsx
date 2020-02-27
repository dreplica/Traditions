import React from 'react';
import { Switch,Route} from 'react-router-dom';
import Sales from './allCategories';

interface props{

}

const SaleRoute: React.FC<props> = ({}) => {
  return (
    <Switch>
        <Route path='/home/sale/women/:type/'>
                <Sales />
             </Route>
             <Route path='/home/sale/men/:type/'>
              <Sales />
            </Route>
            <Route path='/home/sale/access/:type/'>
              <Sales />
            </Route> 
            <Route path='/home/sale/wfoot/:type/'>
              <Sales />
            </Route>
            <Route path='/home/sale/mfoot/:type/'>
              <Sales />
            </Route>
    </Switch>
  );
}


export default SaleRoute