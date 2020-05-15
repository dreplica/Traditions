import React, { Fragment, ChangeEvent, useState } from "react";
import { AdminForm } from "../../Adminscreen/Upload";

interface Iprops {
  setForm: string
  value: string;
}

export default function Socialmedia(props: Iprops) {
  const [state, setstate] = useState<string>("");
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setstate(e.currentTarget.value);
  };

  return (
    <Fragment>
      <p>{props.value}</p>
      <input
        placeholder={`https://${props.value}.com/aba.hi`}
        type="text"
        id={props.value}
        value={state}
        onChange={handleChange}
      />
    </Fragment>
  );
}

export const mediaLinks = ["Facebook", "Instagram", "twitter"];
