import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Axios from 'axios';
import { objectData } from '../../../store/reducers/items';
import { stateData } from '../../../store/reducers/authentication';

const History:React.FC<{auth:objectData}> = ({auth})=> { 
    const [data, setData] = useState<objectData[]>([])
    useEffect(() => {
        console.log("current token",auth)
        console.log("hello")
        Axios.get(`http://localhost:3000/history`,{
            headers:{
                'authorization':`Bearer ${auth?.token}`
            }
        })
        .then(_=>{
            setData(unique(_.data.history))
            // setData(_.data.history)
        })
    }, [auth])
    
    const unique = (data:objectData[]) =>{
        console.log("data entered",data)
        let id = data.map((item:objectData)=>item.id);
        let uniqueId = new Set([...id]);
        console.log("this is data",data)
        return  [...uniqueId].map(id_=>data.reduce((acc:objectData,val:objectData)=>{
            if(val.id === id_){
                val.price += val.price;
                val.quantity += 1;
                acc = val;
            }
            return acc;
        },{})
        )
    }
    console.log(unique(data))

  return (
    <>
        <table>
            <thead>
                <tr>
                    <td>S/n</td>
                    <td>Item</td>
                    <td>Quantity</td>
                    <td>Price</td>
                    <td>Status</td>
                    <td>Date</td>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((items,ind)=><tr>
                        <td>{ind + 1}</td>
                        <td>{items.name}</td>
                        <td>{items.quantity}</td>
                        <td>{items.Price}</td>
                        <td>{items.delivered}</td>
                        <td>{items.created}</td>
                    </tr>)
                }
            </tbody>
        </table>
    </>
  );
}

const mapState = ({authenticate}:{authenticate:stateData})=>({
    auth:authenticate.data?.auth as objectData
})
export default connect(mapState)(History)