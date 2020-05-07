import React,{useEffect} from 'react';
import { Front } from '../../../style/navigation';
import Categories from '../../categories/category';
import Search from '../search/search';
import { RightComponent } from '../../../style/categories';
import MakePayment from '../../../util/Payment/index'
import { Switch, Route, useHistory,} from 'react-router-dom';
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
              <Route path='/home/payment'>
                <MakePayment/>
              </Route> 
              <Route path='/home/search/:id'>
                  <SearchDisplay/>
                </Route>
              </Switch> 
        </RightComponent>
    </Front> 
  );
}

const mapStateToProp = ({authenticate}:{authenticate:stateData}) => ({
  auth:authenticate.data?.auth?.token as string
})

export default connect(mapStateToProp)(Frontpage)
