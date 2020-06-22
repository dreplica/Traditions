import React, { useState, MouseEvent, useEffect } from "react";
import { useHistory } from "react-router-dom";

import CartItem from './cart/cart'
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


export default function Carts(){
  const [state, setState] = useState<[]|string|null>([]);
  const history = useHistory();
  useEffect(() => {
    //  try {
    //   const cart:null= JSON.parse(localStorage.getItem('cart')) ?? [];
    //   setState(cart)
    // } catch (error) {
    //   alert(`this item is not available ${error.message}`)
    // }
  }, []);

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

  // const total = state.reduce((acc,items)=>items?.price? acc += items.price:acc += 0,0)

  return (
    <Container>
      <Content>
            <Total>Total: &#8358;{0}</Total>
        <Header>
          <Count>Cart {0} items</Count>
          <Buy onClick={handlePurchase}>Buy Now</Buy>
        </Header>
        <ShowCart>
          <Display>
            {[0,0,0].map((item, index) => <CartItem 
            cartId={'0'}
            key={index}
            image={'l'}
            name={"kawasaki"}
            price={'9000'}
            />)}
          </Display>
        </ShowCart>
      </Content>
    </Container>
  );
};
