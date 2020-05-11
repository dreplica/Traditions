import React, { useState, MouseEvent } from "react";

import Data from "../../util/categories.json";
import CategoryItem from ".";
import { Container, Content, Ball } from "./style";

export interface dropdown {
  women: string;
  men: string;
  access: string;
  wfoot: string;
  mfoot: string;
  display: "show" | "hide" | "";
}

const dropit: dropdown = {
  women: "none",
  men: "none",
  access: "none",
  wfoot: "none",
  mfoot: "none",
  display: "",
};

type List = [
  "Women",
  "Men",
  "Accessories",
  "Women Foot Wears",
  "Men Foot Wears"
];

export default function Categories() {
  const [drop, setdrop] = useState<dropdown>(dropit);

  const DataList: List = Object.keys(Data) as List;

  const showCategory = (e: MouseEvent) => {
    e.preventDefault();

    if(window.innerWidth >= 999){
      setdrop({ ...drop, display: "" });
      return
    }

    switch (drop.display) {
      case "":
        setdrop({ ...drop, display: "show" });
        return;
      case "show":
        setdrop({ ...drop, display: "hide" });
        return;
      case "hide":
        setdrop({ ...drop, display: "show" });
        return;
      default:
        return;
    }
  };

  return (
    <Container
      className={drop.display}
      onMouseEnter={showCategory}
      onMouseLeave={showCategory}
    >
      <Ball />
      <Content>Category</Content>
      {DataList.map((item, index) => (
        <CategoryItem key={index} name={item} list={Data[item].list} />
      ))}
    </Container>
  );
}
