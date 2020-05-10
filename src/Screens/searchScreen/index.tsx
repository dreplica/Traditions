import React, { useState, MouseEvent, useEffect, Fragment } from "react";
import { connect } from "react-redux";
import Axios from "axios";
import { useParams } from "react-router-dom";

import { itemState, objectData } from "../../store/reducers/items";
import { getItem } from "../../store/actionCreators/actiontypes";
import { stateData } from "../../store/reducers/authentication";
import Cards from "../../ReusableComponents/Cards";
import { Container, Sort, Items } from "../Sales/style";

export interface IProps {
  auth: objectData;
}

interface stateProps {
  one: string;
  two: string;
}

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

function SearchRoute(props: IProps) {
  const { item } = useParams();
  const [state, setState] = useState<incomingData[]>([initialState]);
  const [action, setAction] = useState<stateProps>({
    one: "active",
    two: "none",
  });

  useEffect(() => {
    Axios.get(`http://localhost:3000/items/${item}`, {
      headers: {
        authorization: `bearer ${props.auth?.token}`,
      },
    }).then((res) => setState(res.data));
  }, [item]);

  const sort = (e: MouseEvent) => {
    // e.preventDefault();
    // for(let i in state.sortActive){
    //   if( i !== e.currentTarget.id){
    //     setSortActive({...sortActive,[e.currentTarget.id]:'active'})
    //   }
    //   else setSortActive({...sortActive,[e.currentTarget.id]:"none"})
    // }
  };
  const Spread = state.map((x, i) => (
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
          <button className={action.one} id="one" onClick={sort}>
            Price Top
          </button>
          <button className={action.two} id="two" onClick={sort}>
            Price Down
          </button>
        </div>
      </Sort>
      <Items>{Spread}</Items>
    </Container>
  );
}

const mapStateToProps = ({ authenticate }: { authenticate: stateData }) => ({
  auth: authenticate.data?.auth as objectData,
});

export default connect(mapStateToProps, { getitems: getItem })(SearchRoute);
