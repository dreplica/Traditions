import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Axios from 'axios';
import {HistoryStyle,Summary} from './historystyle' 
import { objectData } from '../../../store/reducers/items';
import { stateData } from '../../../store/reducers/authentication';

const History:React.FC<{auth:string}> = ({auth})=> { 
    const [data, setData] = useState<objectData[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    useEffect(() => {
        console.log("current token",auth)
        console.log("hello")
        Axios.get(`http://localhost:3000/history`,{
            headers:{
                'authorization':`Bearer ${auth}`
            }
        })
        .then(_=>{
            console.log("payload", _.data.payload)
            setData(unique(_.data?.payload))
            console.log("uniqueness",unique(_.data?.payload))
            setLoading(false)
            // setData(_.data.history)
        })
    }, [auth])
    
    const unique = (history:objectData[]) =>{
        console.log("data entered",history) 
        let id = history.map((item:objectData)=>item.id);
        let uniqueId = new Set([...id]);
        console.log([...uniqueId])
        return  [...uniqueId].map(id_=>history.reduce((acc:objectData ,val:objectData)=>{
            if(val.id === id_){
                acc.price = String(parseFloat(acc.price) + parseFloat(val.price));
                acc.quantity = String(parseInt(acc.quantity)+1);
                return ({...val,price:acc.price,quantity:acc.quantity})   
            }
            return acc;
        },{quantity:'0',price:'0'})
        )
    }

    if(!data.length){
        return <>Loading</>
    }

  return (
    <>
    
    <Summary>
  <h3>Total Transaction: &#8358;{data.reduce((acc,val)=>parseInt(val.price) + acc,0)}</h3>
    </Summary>
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
            {console.log("the table", data)}
            <tbody>
                {                     data.map((items,ind)=><tr key={ind}>
                        <td>{ind + 1}</td>
                        <td>{items.itemname}</td>
                        <td>{items.quantity}</td>
                        <td>{items.price}</td>
                        <td>{items.bought}</td>
                        <td>{new Date(items.created).toDateString()}</td>
                    </tr>)
                }
            </tbody>  
        </HistoryStyle>
    </>
  );
}

const mapState = ({authenticate}:{authenticate:stateData})=>({
    auth:authenticate.data?.auth?.token as string
})
export default connect(mapState)(History)