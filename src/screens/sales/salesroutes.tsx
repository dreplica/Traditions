import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';

import SpreadContent from '../../reusablecomponent/spread';
import { getRequest } from '../../store/actioncreator/item'
import { ITEMS } from '../../reusablecomponent/theme/types';



export default function SaleRoutes() {
  const { category, type } = useParams()
  const [state, setstate] = useState<ITEMS[]>([]);

  useEffect(() => {
    getItems()
  }, [category, type])

  const getItems = async()=>{
    const {data} = await Axios.get(`http://localhost:3000/items/${category}/${type}`)
    setstate(data)
  }


return <SpreadContent data={state} />; 
}