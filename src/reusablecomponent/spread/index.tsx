import React, { useState, useEffect } from "react";
import Cards from "../cards";

import {
  Container,
  Sort,
  Filter,
  Button,
  Items
} from "./style";
import { ITEMS } from "../theme/types";

interface Iprops {
  data: Pick<ITEMS, 'id' | 'image' | 'description' | 'itemname' | 'price'>[]
}

const initialState: Iprops['data'] = [{
  id: "",
  image: "",
  description: "",
  itemname: "",
  price: ""
}]

export default function SpreadContent(props: Iprops) {
  const [state, setState] = useState<{
    filter: "cheap" | "costly";
    data: Iprops['data']
  }>({
    filter: "cheap",
    data: initialState
  })

  useEffect(() => {
    switch (state.filter) {
      case "cheap":
        sort("cheap");
        return;
      case "costly":
        sort("costly");
        return;
      default:
        break;
    }
  }, [state.filter]);

  const sort = (arg: string) => {
    let data: Iprops["data"];
    if (arg === "cheap") {
      data = [...props.data].sort(
        (first, second) => parseInt(first.price) - parseInt(second.price)
      );
      setState({ ...state, data: data });
      return;
    }
    data = [...props.data].sort(
      (first, second) => parseInt(second.price) - parseInt(first.price)
    );
    setState({ ...state, data: data });
  };

  const Spread = state.data.map((item, index) => (
    <Cards
      key={index}
      id={item.id}
      image={item.image}
      description={item.description}
      itemname={item.itemname}
      price={item.price}
    />
  ));

  return (
    <Container>
      <Sort>
        <Filter>
          <p>Filter By:</p>
          <Button onClick={(e) => setState({ ...state, filter: "costly" })}>Price Top</Button>
          <Button onClick={(e) => setState({ ...state, filter: "cheap" })}>Price Down</Button>
        </Filter>
      </Sort>
      <Items>{Spread}</Items>
    </Container>
  );
}
