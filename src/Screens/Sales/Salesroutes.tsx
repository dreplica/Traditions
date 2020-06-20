import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { useParams } from 'react-router-dom';
import { FiActivity } from 'react-icons/fi';

import SpreadContent from '../../reusablecomponent/spread';
import img1 from '../../img/agba2.jpg'
import img2 from '../../img/back.jpg'
import img3 from '../../img/mshirt.jpg'
import img4 from '../../img/shirt.jpg'
import img5 from '../../img/womgowncan.jpg'
import img6 from '../../img/skirt.jpg'


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
    image: img1,
    itemname: "dragon5",
    price: "2000",
  },
  {
    description: "",
    id: "",
    image: img2,
    itemname: "dragon4",
    price: "3000",
  },
  {
    description: "",
    id: "",
    image: img3,
    itemname: "dragon3",
    price: "5000",
  },
  {
    description: "",
    id: "",
    image: img4,
    itemname: "dragon2",
    price: "4000",
  },{
    description: "",
    id: "",
    image: img5,
    itemname: "dragon1",
    price: "6000",
  }, {
    description: "",
    id: "",
    image: img6,
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
