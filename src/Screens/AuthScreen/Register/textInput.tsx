import React, { Fragment, ChangeEvent, useState } from "react";
import { AdminForm } from "../../Adminscreen/Upload";

interface Iprops {
  setForm: string;
  value: string;
}

export default function TextInput(props: Iprops) {
  const [state, setstate] = useState("");
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    // setstate();
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
        value={state}
        onChange={handleChange}
      />
    </Fragment>
  );
}

export const inputRef = [
  "First name",
  "Last Name",
  "Username",
  "Email",
  "Phone",
  "Passowrd",
];
