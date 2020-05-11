import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { useParams } from 'react-router-dom';

import SpreadContent from '../../ReusableComponents/Spread';
import { FiActivity } from 'react-icons/fi';

interface IProps {
  description: string;
  id: string;
  image: string;
  itemname: string;
  price: string;
}

const InitialState: IProps[] = [
  {
    description: "",
    id: "",
    image: "",
    itemname: "dragon5",
    price: "2000",
  },
  {
    description: "",
    id: "",
    image: "",
    itemname: "dragon4",
    price: "3000",
  },
  {
    description: "",
    id: "",
    image: "",
    itemname: "dragon3",
    price: "5000",
  },
  {
    description: "",
    id: "",
    image: "",
    itemname: "dragon2",
    price: "4000",
  },{
    description: "",
    id: "",
    image: "",
    itemname: "dragon1",
    price: "6000",
  }, {
    description: "",
    id: "",
    image: "",
    itemname: "dragon1",
    price: "6000",
  },

]
    

export default function SaleRoutes() {
  const { category, type } = useParams()
  const [state, setstate] = useState<IProps[]>(InitialState);
  const [loading, setLoading] = useState<boolean>(false);
  
  useEffect(() => {
    (async function () {
      const result = await Axios.get(`http://localhost:3000/${category}/${type}`);
      const Data = getItems(result.data);
      setstate(Data);
      setLoading(false);
    })();
  }, [category,type])

  const getItems = (data: any) => {
    const filteredValue = data.map((item: { [key: string]: any }) => ({
      itemname: item.itemname,
      description: item.description,
      image: item.image,
      price: item.price,
      id: item.id,
    }));
    return filteredValue;
  };

  if (loading) {
    return <FiActivity />;
  }
  
  return <SpreadContent data={state} />;
}
