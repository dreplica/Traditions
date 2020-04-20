import React, { useState, MouseEvent, useEffect } from 'react';
import OneComponent from '../labels/OneComponent';
import { Latest,Sort } from '../../../style/sales';
import {itemState,objectData} from '../../../store/reducers/items'
import {getItem} from '../../../store/actionCreators/actiontypes' 
import { connect } from 'react-redux';
import Axios from 'axios';
import { useParams } from 'react-router-dom';
import { stateData } from '../../../store/reducers/authentication';

export interface IProps {
  data:objectData[];
  getitems:(args:objectData[])=>void;
  auth:objectData;
  url:string;
}
const Sales: React.FC<IProps> = ({data,getitems,auth,url}) => {
  const [sortActive, setSortActive] = useState<{one:string;two:string;}>({one:'active',two:'none'})
    useEffect(() => {
      if(auth.token !== ""){
        Axios.get(url,{
          headers:{
            'authorization':`bearer ${auth?.token}`
          }
        })
        .then((res)=>getitems(res.data))
      }
    }, [url,useParams])
    //get the path, if men,women,mfoot etc
    //use it to query for that particular item
    //create a route on backend that collects the params
    //send back the data and populate them here
    const sort = (e:MouseEvent)=>{
      e.preventDefault();
      for(let i in sortActive){
        if( i !== e.currentTarget.id){
          setSortActive({...sortActive,[e.currentTarget.id]:'active'})
        }
        else setSortActive({...sortActive,[e.currentTarget.id]:"none"})
      }
    }
    const Spread = data.map((x,i)=><OneComponent key={i} 
    id={x.id} image={x.image}
    desc={x.description} 
    name={x.itemname} 
    price={x.price}/>
    )
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