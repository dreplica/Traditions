import React, { useState, ChangeEvent, MouseEvent} from "react";
import Axios from "axios";
import { FiSearch } from "react-icons/fi";
import { objectData } from "../../store/reducers/items";
import { Link } from "react-router-dom";

import { stateData } from "../../store/reducers/authentication";
import { connect } from "react-redux";
import { 
  Container, 
  DropList, 
  Searchinput 
} from "./style";

type Iprops = objectData

interface search{
  itemname:string;
  id:number;
}

function Search(props:Iprops) {
  const [search, setSearch] = useState("");
  const [data, setdata] = useState<search[]>([]);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.currentTarget?.value === "") {
      setdata([]);
      setSearch(e.currentTarget.value)
      return;
    }

    setSearch(e.currentTarget.value)
    const value_to_search = new RegExp(e.currentTarget.value,'ig')
    console.log(value_to_search)
    searching(value_to_search);
  };

  const searching = async (input:RegExp) =>{
    // const result = await Axios.get(`http://localhost:3000/search/${item.toLowerCase()}`, {
    //   headers: {
    //     authorization: `Bearer ${props?.token}`,
    //   },
    // })
    // return result.data

    const result = dataToSearch.filter(item=>item.itemname.match(input))
    setdata(result)
    console.log(result)
  }

  const hideList = (e:MouseEvent)=>{
    // e.preventDefault();
    setdata([])
    setSearch("")
  }
  return (
    <Container>
      <Searchinput>
        <input
          type="search"
          placeholder="search items"
          value={search}
          onChange={handleSearch}
        />
        <FiSearch color='black'size={30}/>
      </Searchinput>
      <DropList>
        {data.map((item, index) => (<Link 
        key={index}
        onClick={hideList}
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


const dataToSearch:search[] = [
  {
    itemname:"ab",
    id:0
  },
  {
    itemname: "ac",
    id: 1
  },
  {
    itemname: "ad",
    id: 2
  },
  {
    itemname: "bb",
    id: 3
  },
  {
    itemname: "bc",
    id: 4
  },
  {
    itemname: "col",
    id: 5
  },
]