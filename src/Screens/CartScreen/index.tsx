import React, { useState, MouseEvent, useEffect } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import Axios from "axios";

import { objectData, itemState } from "../../store/reducers/items";
import { removeCart } from "../../store/actionCreators/actiontypes";
import { stateData } from "../../store/reducers/authentication";
import CartItem from './Cart/cart'
import { 
  Container, 
  Content, 
  Buy
} from "./style";

const Carts: React.FC<{
  data: objectData[];
  auth: objectData;
  remove: (id: string) => void;
}> = ({ data, remove, auth }) => {
  const [total, settotal] = useState(0);
  const history = useHistory();
  useEffect(() => {
    const tot = data.reduce((acc, val) => acc + parseFloat(val.price), 0);
    settotal(tot);
  }, [data]);

  const handlePurchase = (e: MouseEvent) => {
    e.preventDefault();
    Axios.post(`http://localhost:3000/history`, data, {
      headers: {
        authorization: `Bearer ${auth?.token}`,
      },
    });
    history.push("/home/payment");
  };

  return (
    <Container>
      <Content>
        <div className="head-cart">
          <h3>Cart {data.length} items</h3>
          <Buy onClick={handlePurchase}>Buy Now</Buy>
        </div>
        <div className="main-cart">
          <div className="cart">
            {[0,0,0].map((item, index) => <CartItem 
            cartId={'0'}
            key={index}
            image={'l'}
            name={"kawasaki"}
            price={'9000'}
            />)}
          </div>
          <div className="total">
            <h2>
              <strong>total: &#8358;{total}</strong>
            </h2>
          </div>
        </div>
      </Content>
    </Container>
  );
};
const mapStateToProps = ({
  ItemsReducer,
  authenticate,
}: {
  ItemsReducer: itemState;
  authenticate: stateData;
}) => ({
  data: ItemsReducer.cart,
  auth: authenticate.data?.auth as objectData,
});
export default connect(mapStateToProps, { remove: removeCart })(Carts);
