import React, { useState, MouseEvent, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";

import CartItem from './cart/cart'
import { ITEMS } from "../../reusablecomponent/theme/types";
import { itemState } from "../../store/reducers/items";
import {
  Container,
  Content,
  Header,
  Count,
  Buy,
  Display,
  ShowCart,
  Total
} from "./style";

interface iProps{
  cart:ITEMS[]; 
}

function Carts(props:iProps) {
  const [state, setState] = useState<ITEMS[]>([]);
  const history = useHistory();
  useEffect(() => {
    setState(props.cart)
  }, [props.cart]);

  const handlePurchase = (e: MouseEvent) => {
    // e.preventDefault();
    // Axios.post(`http://localhost:3000/history`, data, {
    //   headers: {
    //     authorization: `Bearer ${auth?.token}`,
    //   },
    // });
    //but payment would have to be handled 
    //from the ayment side, after getting confirmation
    history.push("/home/payment");
  };

  const total = state.reduce((acc, items) => {
    return items.price
      ? acc += parseInt(items.price) as number
      : acc += 0
},0)

return (
  <Container>
    <Content>
      <Total>Total: &#8358;{total}</Total>
      <Header>
        <Count>Cart {state.length} items</Count>
        <Buy onClick={handlePurchase}>Buy Now</Buy>
      </Header>
      <ShowCart>
        <Display>
          {state.map((item, index) => <CartItem
            cartid={item.cartid as string}
            key={index}
            image={item.image}
            itemname={item.itemname}
            price={item.price}
          />)}
        </Display>
      </ShowCart>
    </Content>
  </Container>
);
};


const mapStateToProps = ({ItemsReducer}:{ItemsReducer:itemState})=>({
  cart:ItemsReducer.cart
})

export default connect(mapStateToProps)(Carts)  