import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { FiActivity } from "react-icons/fi";

import SpreadContent from "../../reusablecomponent/spread";
import { itemState } from "../../store/reducers/items";
import { getRequest } from "../../store/actioncreator/item";
import { ITEMS } from "../../reusablecomponent/theme/types";
import Axios from "axios";

interface iProps {
    data: ITEMS[]
    getRequest(arg: string): void;
}

function Topsales(props: iProps) {
    const [state, setstate] = useState<ITEMS[]>([]);
 
    useEffect(() => {
        getItems()
    }, []);


    const getItems = async () => {
        const { data } = await Axios.get(`https://thradition.herokuapp.com/history`)
        setstate(data)
    }

    return <SpreadContent data={state} />;
}

const mapStateToProps = ({ ItemsReducer }: { ItemsReducer: itemState }) => ({
    data: ItemsReducer.data
})

export default connect(mapStateToProps, { getRequest })(Topsales) 