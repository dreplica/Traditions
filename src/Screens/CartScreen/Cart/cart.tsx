import React, { useState } from "react";

import img from '../../../img/womgowncan.jpg'
import { Container, Content, Image, RemoveItem } from "./style";

interface Iprops {
  image: string;
  cartId: string;
  name: string;
  price: string;
}

export default function CartItem(props: Iprops) {
//parody state, won't need it
  const  [state, setState] = useState("flex")

  const removeItem = (id:number = 0) => {
    // try {
    //   const cart = JSON.parse(localStorage.getItem('cart'));
    //   const newCart = cart.filter((item) => item.cartId !== id)
    //   localStorage['cart'] = JSON.stringify(newCart)
    // } catch (error) {
    //   alert(`this item is not available ${error.message}`)
    // }
    setState("none")
    //on adding to cart, just send to localstorage
  };

  return (
    <Container className={state}>
      <RemoveItem onClick={()=>removeItem()} id={props.cartId}>X</RemoveItem>
      <Image src={img} alt="" />
      <Content>
        <p>{props.name}</p>
        <p>&#8358;{props.price}</p>
      </Content>
    </Container>
  );
}
