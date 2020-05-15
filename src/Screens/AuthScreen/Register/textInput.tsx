import React, { Fragment, ChangeEvent, useState } from "react";
import { AdminForm } from "../../Adminscreen/Upload";
import { connect } from "react-redux";
import { itemState } from "../../../store/reducers/items";
import { SIGNUP_FORM, SIGNUP_KEY } from "../../../ReusableComponents/theme/types";
import { registrationFrom } from "../../../store/actionCreators/items";

interface Iprops {
  setForm: (arg:{[key:string]:string|number})=>void;
  reg_form:SIGNUP_FORM
  value:SIGNUP_KEY; 
}

function TextInput(props: Iprops) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const item = {[props.value]:e.currentTarget.value}
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
        type={setType(props.value)}
        id={props.value}
        value={props.reg_form[props.value]}
        onChange={handleChange}
      />
    </Fragment>
  );
}

const mapStateToProps = ({ItemsReducer}:{ItemsReducer:itemState}) => {
  return {
    reg_form: ItemsReducer.reg_form
  }
}

export default connect(mapStateToProps,{setForm:registrationFrom})(TextInput)

export const inputRef = [
  "firstname",
  "lastname",
  "username",
  "email",
  "Phone",
  "Passowrd",
];
