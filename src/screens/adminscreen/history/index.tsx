import React, { useEffect, useState, Fragment } from 'react';
import { connect } from 'react-redux';
import Axios from 'axios';

import { ITEMS,initialItems } from '../../../reusablecomponent/theme/types';
import { stateData } from '../../../store/reducers/authentication';
import {HistoryStyle,Summary} from './style' 

const History:React.FC<{auth:string}> = ({auth})=> { 
    const [state, setstate] = useState<{
        items: ITEMS[]; loading: Boolean
    }>({
        items: [initialItems],
        loading:true
    })
    useEffect(() => {
        Axios.get(`https://thradition.herokuapp.com/history`,{
            headers:{
                'authorization':`Bearer ${auth}`
            }
        })
        .then(_=>{
            setstate({ ...state, items: unique(_.data?.payload) })
            setstate({ ...state, loading: false })
        })
    }, [auth])
     
    const unique = (history:ITEMS[]) =>{
        let id = history.map((item:ITEMS)=>item.id);
        let uniqueId = new Set([...id]);

        return  [...uniqueId].map(id_=>history.reduce((acc:ITEMS ,val:ITEMS)=>{
            if(val.id === id_){
                acc.price = String(parseFloat(acc.price) + parseFloat(val.price));
                acc.quantity = String(parseInt(acc.quantity as string)+1);
                return ({...val,price:acc.price,quantity:acc.quantity})   
            }
            return acc;
        },{...initialItems})
        )
    }

    if(!state.items.length){
        return <>Loading</>
    }


    const totalTransaction = <Summary>
        <h3>Total Transaction: &#8358;{state.items.reduce((acc, val) => parseInt(val.price) + acc, 0)}</h3>
    </Summary>

  return (
    <Fragment>
    {totalTransaction}
        <HistoryStyle>
            <thead>
                <tr>
                    <td>S/n</td>
                    <td>Item</td>
                    <td>Quantity</td>
                    <td>Price</td>
                    <td>Status</td>
                    <td>Last Purchased Date</td>
                </tr>
            </thead>
            <tbody>
                  {
                      state.items.map((items, ind) => <tr key={ind}>
                        <td>{ind + 1}</td>
                        <td>{items.itemname}</td>
                        <td>{items.quantity}</td>
                        <td>{items.price}</td>
                        <td>{items.bought}</td> 
                        {/* <td>{new Date(items?.createdAt).toDateString()}</td> */}
                    </tr>)
                }
            </tbody>  
        </HistoryStyle>
    </Fragment>
  );
}

const mapState = ({authenticate}:{authenticate:stateData})=>({
    auth:authenticate.data?.auth?.token as string
})
export default connect(mapState)(History)