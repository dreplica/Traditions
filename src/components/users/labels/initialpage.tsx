import React,{useEffect} from 'react';
import { connect } from "react-redux"
import { Latest } from "../../../style/sales"
import OneComponent from "./OneComponent"
import Slide from "./slider"
import { objectData, itemState } from '../../../store/reducers/items';
import Axios from 'axios';  
import {IProps} from '../allCategories'
import { getItem } from '../../../store/actionCreators/actiontypes';
import { stateData } from '../../../store/reducers/authentication';

const Initial :React.FC<IProps>= ({data,auth,getitems})=>{
    useEffect(() => {
      if(auth.token !== ""){
        Axios.get(`http://localhost:3000/items`,{
          headers:{
            'authorization':`bearer ${auth?.token}`
          }
        })
        .then((res)=>getitems(res.data))
      }
    }, [auth])

    console.log("data d here",data)
    const topS = data.map((x,i)=><OneComponent id ={x.id} key={i} image={x.image} desc={x.description} name={x.name} price={x.price}/>).slice(0,3)
    const newS = data.reverse().map((x,i)=><OneComponent id ={x.id} key={i} image={x.image} desc={x.description} name={x.name} price={x.price}/>).slice(0,3)
    const sugs = data.map((x,i)=><OneComponent id ={x.id} key={i} image={x.image} desc={x.description} name={x.name} price={x.price}/>).slice(0,3)
    return <>
    <Slide/>
                    <h2>Top Sales</h2>
                  <Latest>
                    {topS}
                  </Latest>
                    <h2>New Sales</h2>
                  <Latest>
                    {newS}
                  </Latest>
                    <h2>Suggestion</h2>
                  <Latest>
                    {sugs}
                  </Latest>
    </>
  }

  const mapStateToProps = ({ItemsReducer,authenticate}:{ItemsReducer:itemState,authenticate:stateData})=>({
    data:ItemsReducer.data as objectData[],
    auth:authenticate.data?.auth as objectData
  })
    
  export default connect(mapStateToProps,{getitems:getItem})(Initial)