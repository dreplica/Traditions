import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Axios from "axios";
import { useParams } from "react-router-dom";

import { getItem } from "../../store/actioncreator/item";
import { stateData } from "../../store/reducers/authentication";
import SpreadContent from "../../reusablecomponent/spread";
import { ITEMS } from "../../reusablecomponent/theme/types";


  export default function SearchRoute() {
  const { item } = useParams();
  const [state, setState] = useState<ITEMS[]>([]);

  useEffect(() => {
    getItems()
  }, [item]);

  const getItems = async ()=>{
    const { data } = await Axios.get(`https://thradition.herokuapp.com/items/${item}`)
    setState([...data.search]);
  }

  return <SpreadContent data={state} />;
}
