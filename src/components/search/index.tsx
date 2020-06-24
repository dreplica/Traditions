import React, { useState, ChangeEvent, MouseEvent, FocusEvent } from "react";
import Axios from "axios";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";

import {
  Container,
  DropList,
  Searchinput
} from "./style";
import { ITEMS } from "../../reusablecomponent/theme/types";


interface search {
  itemname: string;
  id: number;
}

export default function Search() {
  const [state, setstate] = useState<{ search: string, data: ITEMS[] }>({
    search: "",
    data: []
  });

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const valueSearch = e.currentTarget.value
    if (valueSearch === "") {
      setstate({ search: "", data: [] })
      return;
    }

    searching(valueSearch);
  };

  const searching = async (input: string) => {
    const { data } = await Axios.get(`https://thradition.herokuapp.com/search/${input.toLowerCase()}`)
    setstate({
      ...state,
      search: input,
      data: data.search
    })
  }

  const hideList = (e: MouseEvent) => {
    // e.preventDefault();
    setstate({ data: [], search: "" })
  }

  return (
    <Container > 
      <Searchinput>
        <input 
          type="search"
          placeholder="search items"
          value={state.search}
          onChange={handleSearch}
        />
        <FiSearch color='black' size={30} />
      </Searchinput>
      <DropList>
        {state.data.map((item, index) => (<Link 
        key={index}
        onClick={hideList}
        to={`/search/${item.id}`}>
          {item.itemname}
          </Link>))}
      </DropList>
    </Container>
  );
}
