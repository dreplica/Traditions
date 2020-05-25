import React, { Fragment, ChangeEvent } from "react";
import { connect } from "react-redux";

import { itemState } from "../../../store/reducers/items";
import {
  SIGNUP_FORM,
  SIGNUP_KEY,
} from "../../../ReusableComponents/theme/types";
import { registrationFrom } from "../../../store/actionCreators/items";

export type InputContext = Omit<
  SIGNUP_KEY,
  "companyname" | "companydesc" | "logo" | "facebook" | "twitter" | "instagram"
>;

interface Iprops {
  setForm: (arg: any) => void;
  reg_form: SIGNUP_FORM;
  value: InputContext;
}

function TextInput(props: Iprops) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.currentTarget.value);
    console.log(props.value,"value")
    const item = { [props.value as any]: e.currentTarget.value };
    console.log("is item",item)
    props.setForm(item);
  };

  const setType = (e: string) => {
    switch (e) {
      case "Email":
        return "email";
      case "Password":
        return "password";
      case "Phone":
        return "tel";
      default:
        return "text"; 
    }
  };

  return (
    <Fragment>
      <p>{props.value}</p>
      <input
        placeholder={`${props.value}`}
        type={setType(props.value as string)}
        id={props.value as string}
        value={props.reg_form[props.value as SIGNUP_KEY]}
        onChange={handleChange}
      />
    </Fragment>
  );
}

const mapStateToProps = ({ ItemsReducer }: { ItemsReducer: itemState }) => {
  return {
    reg_form: ItemsReducer.reg_form,
  };
};

export default connect(mapStateToProps, { setForm: registrationFrom })(
  TextInput
);

export const inputRef: InputContext[] = [
  "firstname",
  "lastname",
  "username",
  "email",
  "phone",
  "password",
];
