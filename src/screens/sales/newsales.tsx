import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { FiActivity } from "react-icons/fi";

import SpreadContent from "../../reusablecomponent/spread";
import { itemState } from "../../store/reducers/items";
import { getRequest } from "../../store/actioncreator/item";
import { ITEMS } from "../../reusablecomponent/theme/types";

interface iProps {
  data: ITEMS[]
  getRequest(arg: string): void;
}

function Newsales(props:iProps) {
  const [state, setstate] = useState(props.data);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    props.getRequest('items')
  },[]);



  if (loading) {
    return <FiActivity />;
  }
console.log('the state state :>> ', props.data);
  return <SpreadContent data={props.data} />;
}

const mapStateToProps = ({ItemsReducer }:{ItemsReducer:itemState}) => ({
  data:ItemsReducer.data
})

export default connect(mapStateToProps,{getRequest})(Newsales)