import React, { useEffect, useState } from "react";
import PaystackButton from "react-paystack";
import { connect } from "react-redux";
import { itemState } from "../../store/reducers/items";
import { ITEMS } from "../../ReusableComponents/theme/types";

interface Iprops {
  data: ITEMS[];
}

function MakePayment({ data }: Iprops) {
  const [userBuy, setUserbuy] = useState({ refId: "", email: "", amount: "" });
  useEffect(() => {
    const tot = data.reduce((acc, val) => acc + parseFloat(val.price), 0);
    const refId = "" + Math.floor(Math.random() * (100000 - 1) + 200000);
    const email = "annawimb@gmail.com";
    const amount = "" + tot;
    setUserbuy({ refId, email, amount });
  }, [data]);
  return (
    <div style={{ height: "50vh", width: "50%" }}>
      <PaystackButton
        text="Make Payment"
        className="payButton"
        callback={(res: any) => console.log(res)}
        close={(res: any) => console.log(res)}
        disabled={false}
        embed={true}
        reference={userBuy?.refId}
        email={userBuy?.email}
        amount={userBuy?.amount}
        paystackkey={`pk_test_961264475d5c45ab6db9397b2f97f90c35bcd238`}
        tag="button"
      />
    </div>
  );
}

const state = ({ ItemsReducer }: { ItemsReducer: itemState }) => ({
  data: ItemsReducer.cart,
});

export default connect(state)(MakePayment);
