import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Axios from "axios";
import { useParams } from "react-router-dom";

import { objectData } from "../../store/reducers/items";
import { getItem } from "../../store/actionCreators/actiontypes";
import { stateData } from "../../store/reducers/authentication";
import SpreadContent from "../../ReusableComponents/Spread";

export interface IProps {
  auth: objectData;
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

  useEffect(() => {
    Axios.get(`http://localhost:3000/items/${item}`, {
      headers: {
        authorization: `bearer ${props.auth?.token}`,
      },
    }).then((res) => setState(res.data));
  }, [item]);

  return <SpreadContent data={state} />;
}

const mapStateToProps = ({ authenticate }: { authenticate: stateData }) => ({
  auth: authenticate.data?.auth as objectData,
});

export default connect(mapStateToProps, { getitems: getItem })(SearchRoute);
