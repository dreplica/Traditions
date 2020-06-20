import React, { Fragment, ChangeEvent } from "react";
import Categories from "../../../util/upload.json";
import { AdminForm } from ".";

interface Iprops {
  setForm: (form: AdminForm) => void;
  form: AdminForm;
}

export default function DropDown(props: Iprops) {

  const keys: AdminForm["category"][] = Object.keys(
    Categories
  ) as AdminForm["category"][];

  const categoryAction = (event: ChangeEvent<HTMLSelectElement>) => {
    const item: AdminForm["category"] = event.currentTarget
      .value as AdminForm["category"];
    props.setForm({ ...props.form, category: item });
  };

  const typeAction = (event: ChangeEvent<HTMLSelectElement>) => {
    const item: string = event.currentTarget.value;
    props.setForm({ ...props.form, type: item });
  };

  const category = keys.map((item, index) => (
    <option key={index} value={item}>
      {item}
    </option>
  ));
  
  return (
    <Fragment>
      <p>Select Category</p>
      <select onChange={categoryAction}>{category}</select>
      <p>Select type</p>
      <select onChange={typeAction}>
        {Categories[props.form.category].map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
    </Fragment>
  );
}
