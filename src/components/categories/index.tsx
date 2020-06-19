import React from "react";
import { Link } from "react-router-dom";

import { Category, Name, List } from "./style";

interface Iprops {
  name: string;
  list: { link: string; item: string }[];
}

export default function CategoryItem(props: Iprops) {
  return (
    <Category>
      <Name>{props.name}</Name>
      <List>
        {props.list.map((item, index) => (
          <Link key={index} to={item.link}>
            {item.item}
          </Link>
        ))}
      </List>
    </Category>
  );
}
