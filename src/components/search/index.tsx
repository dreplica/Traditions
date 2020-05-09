import React, { useState, ChangeEvent, useEffect } from "react";
import Axios from "axios";
import { FiSearch } from "react-icons/fi";
import { objectData } from "../../store/reducers/items";
import { Link } from "react-router-dom";

import { Searcher } from "../../style/navigation";
import { stateData } from "../../store/reducers/authentication";
import { connect } from "react-redux";
import { 
  Container, 
  DropList, 
  Searchinput 
} from "./style";

type Iprops = objectData


function Search(props:Iprops) {
  const [search, setSearch] = useState("");
  const [data, setdata] = useState<Array<{ [key: string]: string }>>([]);
  useEffect(() => {
    const val = new RegExp(search, "ig");
    Axios.get(`http://localhost:3000/search/${search.toLowerCase()}`, {
      headers: {
        authorization: `Bearer ${props?.token}`,
      },
    }).then((res) => {
      setdata(
        res.data?.search.filter((item: objectData, index: number) =>
          item.itemname.match(val)
        )
      );
    });
  }, [setdata, setSearch, props, search]);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.currentTarget?.value === "") {
      setSearch("");
      setdata([]);
    }
    setSearch(e.currentTarget?.value);
  };

  return (
    <Container>
      <Searchinput>
        <input
          type="search"
          placeholder="search items"
          value={search}
          onChange={handleSearch}
        />
        <FiSearch color='black'/>
      </Searchinput>
      <DropList>
        {data.map((item, index) => (<Link 
        key={index}
        to={`/search/${item.id}`}>
          {item.itemname}
          </Link>))}
      </DropList>
    </Container>
  );
}

const mapStateToProps = ({authenticate}:{authenticate:stateData}) =>({
auth:authenticate.data?.auth as objectData
})

export default connect(mapStateToProps)(Search);
