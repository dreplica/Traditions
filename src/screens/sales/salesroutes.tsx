import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { useParams } from 'react-router-dom';

import SpreadContent from '../../reusablecomponent/spread';
import { ITEMS } from '../../reusablecomponent/theme/types';



export default function SaleRoutes() {
  const { category, type } = useParams()
  const [state, setstate] = useState<ITEMS[]>([]);

  useEffect(() => {
    getItems()
  }, [category, type])

  const getItems = async()=>{
    const { data } = await Axios.get(`https://thradition.herokuapp.com/items/${category}/${type}`)
    setstate(data)
  }


return <SpreadContent data={state} />; 
}