import React, { useState, MouseEvent, useEffect } from 'react';
import OneComponent from './labels/OneComponent';
import { Latest,Sort } from '../../style/sales';
import {itemState,objectData} from '../../store/reducers/items'
import {getItem} from '../../store/actionCreators/actiontypes' 
import { connect } from 'react-redux';
import Axios from 'axios';
import { useRouteMatch } from 'react-router-dom';
import authenticate, { stateData } from '../../store/reducers/authentication';

interface Props {
  data:objectData[];
  getitems:(args:objectData[])=>void;
  auth:objectData;
}
const Sales: React.FC<Props> = ({data,getitems,auth}) => {
  const matcher = useRouteMatch();
    useEffect(() => {
      const path = matcher.path
      console.log(path)  
      console.log("this is auth",auth)
      if(auth.token !== ""){
        Axios.get(`http://localhost:3000/items`,{
          headers:{
            'authorization':`bearer ${auth?.token}`
          }
        })
        .then((res)=>getitems(res.data))
      }
    }, [auth])
    //get the path, if men,women,mfoot etc
    //use it to query for that particular item
    //create a route on backend that collects the params
    //send back the data and populate them here
    const [sortActive, setSortActive] = useState<{one:string;two:string;}>({one:'active',two:'none'})
    const sort = (e:MouseEvent)=>{
      e.preventDefault();
      for(let i in sortActive){
        if( i !== e.currentTarget.id){
          console.log("this is i",i)
          setSortActive({...sortActive,[e.currentTarget.id]:'active'})
        }
        else setSortActive({...sortActive,[e.currentTarget.id]:"none"})
      }
    }
    console.log("hello")
    const arr = Array.from({length:50},()=>1)
    const Spread = data.map((x,i)=><OneComponent key={i} image={x.image} desc={x.description} name={x.name} price={x.price}/>)
  return (<>
      <Sort>
        <div>
          <p>Filter By:</p>
          <button className={sortActive.one} id='one' onClick={sort}>Price Top</button>
          <button className={sortActive.two} id='two' onClick={sort}>Price Down</button>
        </div>
      </Sort>
    <Latest>
        {Spread}
    </Latest>
    </>
  );
}


const mapStateToProps = ({ItemsReducer,authenticate}:{ItemsReducer:itemState,authenticate:stateData})=>({
  data:ItemsReducer.data as objectData[],
  auth:authenticate.data?.auth as objectData 
})
 

export default connect(mapStateToProps,{getitems:getItem})(Sales)