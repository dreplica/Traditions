import React, { useState, useEffect } from "react";
import Cards from "../Cards";

import { Container, Sort, Items } from "./style";

interface Iprops {
  id: string;
  image: string;
  description: string;
  itemname: string;
  price: string;
}

export default function SpreadContent(props: Iprops[]) {
  const [state, setState] = useState<"cheap" | "costly">("cheap");
  const [stateData, setStateData] = useState<Iprops[]>([]);

  useEffect(() => {
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
    console.log(arg);
    let data: Iprops[];
    if (arg === "cheap") {
      data = [...stateData].sort(
        (first, second) => parseInt(first.price) - parseInt(second.price)
      );
      setStateData(data);
      return;
    }
    data = [...stateData].sort(
      (first, second) => parseInt(first.price) - parseInt(second.price)
    );
    setStateData(data);
  };

  const Spread = stateData.map((x, i) => (
    <Cards
      key={i}
      id={x.id}
      image={x.image}
      desc={x.description}
      name={x.itemname}
      price={x.price}
    />
  ));
  return (
    <Container>
      <Sort>
        <div>
          <p>Filter By:</p>
          <button onClick={(e) => setState("costly")}>Price Top</button>
          <button onClick={(e) => setState("cheap")}>Price Down</button>
        </div>
      </Sort>
      <Items>{Spread}</Items>
    </Container>
  );
}
