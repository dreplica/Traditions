import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useParams } from "react-router-dom";

import SpreadContent from "../../ReusableComponents/Spread";

interface incomingData {
  id: string;
  image: string;
  description: string;
  itemname: string;
  price: string;
}

const initialState: incomingData = {
  id: "string;",
  image: " string;",
  description: " string;",
  itemname: " string;",
  price: " string;",
};

export default function SearchRoute() {
  const { item } = useParams();
  const [state, setState] = useState<incomingData[]>([initialState]);

  useEffect(() => {
    (async function(){
      const search_result = await Axios.get(`http://localhost:3000/items/${item}`)
      setState(search_result.data)
    })()
  }, [item]);

  return <SpreadContent data={state} />;
}
