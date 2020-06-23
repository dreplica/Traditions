import React, { useState } from "react";
import { connect } from "react-redux";

import { ITEMS } from "../../../reusablecomponent/theme/types";
import { removeCart } from '../../../store/actioncreator/item'
import img from "../../../img/womgowncan.jpg";
import {
  Container,
  Content,
  Image,
  RemoveItem
} from "./style";
import getsingleimage from "../../../reusablecomponent/getsingleimage";

interface Iprops extends Pick<ITEMS,'image'|'itemname'|'price'|'quantity'> {
  cartid: string; 
  removeCart(T: string): void;
}

 function CartItem(props: Iprops) {
  const [state, setState] = useState("flex");
 
  const removeItem = () => {
    
    // setState("none");
    props.removeCart(props.cartid)
    //on adding to cart, just send to localstorage

  };

  return (
    <Container className={state}>
      <RemoveItem onClick={removeItem}>
        X
      </RemoveItem>
      <Image src={getsingleimage(props.image)} alt="" />
      <Content>
        <p>{props.itemname}</p>
        <p>&#8358;{props.price}</p>
      </Content>
    </Container>
  );
}

export default connect(null, { removeCart })(CartItem)
