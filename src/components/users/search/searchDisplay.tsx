import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import Axios from 'axios';
import { connect } from 'react-redux';

import { objectData } from '../../../store/reducers/items';
import { getItem } from '../../../store/actionCreators/actiontypes';
import { stateData } from '../../../store/reducers/authentication';
import Categories from '../categories/categories';
import { Front } from '../../../style/navigation';
import Cards from '../../../ReusableComponents/Cards';
import {
    RightComponent
} from '../../../style/categories';

type Props = {
    auth:objectData; 
    setItems:(args:objectData[])=>void;
}
const SearchDisplay:React.FC<Props> = ({auth,setItems})=>{
    const {id} = useParams();
    const [data, setData] = useState<objectData[]>([])
    useEffect(() => {
        console.log("hello my neighbours")
        if (id) {
            
            Axios.get(`http://localhost:3000/items/${id}`,{
                headers:{
                    authorization:`Bearer ${auth?.token}`
                }
            })
            .then(_=>{
                setData(_.data)
                setItems(_.data)
            })
        }
    }, [id])
  return (
      <Front>
      <Categories />
        <RightComponent>

            {data.length < 1 ? <>sorry no data available</>
            :<Cards name={data[0]?.itemname} 
            id={data[0]?.id} desc={data[0]?.description} 
            price={data[0]?.price} image={data[0]?.image}/>
              }
              {console.log("data is coming in",data)}
        </RightComponent>
      </Front>
  );
}

const mapStateToProps = ({authenticate}:{authenticate:stateData})=>({
    auth:authenticate.data?.auth as objectData
})

export default connect(mapStateToProps,{setItems:getItem})(SearchDisplay)