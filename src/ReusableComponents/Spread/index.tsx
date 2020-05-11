import React, { useState, useEffect } from "react";
import Cards from "../Cards";

import { 
  Container, 
  Sort,
  Filter,
  Button,
  Items } from "./style";

interface Iprops {
  data: {
    id: string;
    image: string;
    description: string;
    itemname: string;
    price: string;
  }[];
}


export default function SpreadContent(props: Iprops) {
  const [state, setState] = useState<"cheap" | "costly">("cheap");
  const [stateData, setStateData] = useState<Iprops["data"]>(props.data);

  useEffect(() => {
      console.log(stateData)
    switch (state) {
      case "cheap":
        sort("cheap");
        return;
      case "costly":
        sort("costly");
        return;
      default:
        break;
    }
  }, [state]);

  const sort = (arg: string) => {
    let data: Iprops["data"];
    if (arg === "cheap") {
      data = [...stateData].sort(
        (first, second) => parseInt(first.price) - parseInt(second.price)
      );
      setStateData(data);
      return;
    }
    data = [...stateData].sort(
      (first, second) => parseInt(second.price) - parseInt(first.price)
    );
    setStateData(data);
  };

  const Spread = stateData.map((item, index) => (
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
          <Button onClick={(e) => setState("costly")}>Price Top</Button>
          <Button onClick={(e) => setState("cheap")}>Price Down</Button>
        </Filter>
      </Sort>
      <Items>{Spread}</Items>
    </Container>
  );
}
