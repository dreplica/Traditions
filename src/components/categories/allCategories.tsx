import React, { useState, MouseEvent, useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import Axios from 'axios';
import { useParams } from 'react-router-dom';

import { itemState, objectData } from '../../store/reducers/items'
import { getItem } from '../../store/actionCreators/actiontypes'
import { stateData } from '../../store/reducers/authentication';
import Cards from '../../ReusableComponents/Cards';
import {
  Latest,
  Sort
} from '../../style/sales';

export interface IProps {
  data: objectData[];
  getitems: (args: objectData[]) => void;
  auth: objectData;
}

interface stateProps {
  one: string;
  two: string;
  url: string;
}

function SaleRoutes({ data, getitems, auth }: IProps) {
  const { category, type } = useParams()
  const [state] = useState<stateProps>({
    one: 'active',
    two: 'none',
    url: `http://localhost:3000/items/${category}/${type}`
  })

  useEffect(() => {
    console.log(category,type)
    Axios.get(state.url, {
      headers: {
        'authorization': `bearer ${auth?.token}`
      }
    })
      .then((res) => getitems(res.data))
  }, [state.url])

  const sort = (e: MouseEvent) => {
    // e.preventDefault();
    // for(let i in state.sortActive){
    //   if( i !== e.currentTarget.id){
    //     setSortActive({...sortActive,[e.currentTarget.id]:'active'})
    //   }
    //   else setSortActive({...sortActive,[e.currentTarget.id]:"none"})
    // }
  }
  const Spread = data.map((x, i) => <Cards key={i}
    id={x.id} image={x.image}
    desc={x.description}
    name={x.itemname}
    price={x.price} />
  )
  return (
    <Fragment>
      <Sort>
        <div>
          <p>Filter By:</p>
          <button className={state.one} id='one' onClick={sort}>Price Top</button>
          <button className={state.two} id='two' onClick={sort}>Price Down</button>
        </div>
      </Sort>
      <Latest>
        {Spread}
      </Latest>
    </Fragment>
  );
}


const mapStateToProps = ({ ItemsReducer, authenticate }: { ItemsReducer: itemState, authenticate: stateData }) => ({
  data: ItemsReducer.data as objectData[],
  auth: authenticate.data?.auth as objectData
})


export default connect(mapStateToProps, { getitems: getItem })(SaleRoutes)