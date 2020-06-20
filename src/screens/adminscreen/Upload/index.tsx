import React, { useState, ChangeEvent, FormEvent } from "react";
import { connect } from "react-redux";
import Axios from "axios";

import { stateData } from "../../../store/reducers/authentication";
import { ITEMS } from "../../../ReusableComponents/theme/types";
import DropDown from "./DropDown";
import imageUpload from "./imageUpload";
import { Form, Heading, TextArea, ImageInput, Error, Input } from "./style";

interface Iprops {
  auth: string;
}

export interface AdminForm extends Omit<ITEMS, "id"> {
  category: "accessories" | "men" | "menfoot" | "women" | "womenfoot";
  type: string;
  quantity: number;
}

const initialForm: AdminForm = {
  category: "women",
  type: "",
  itemname: "",
  price: "",
  image: "",
  description: "",
  quantity: 0,
};

type Keys =
  | "category"
  | "type"
  | "itemname"
  | "price"
  | "image"
  | "description"
  | "quantity";

function Admin({ auth }: Iprops) {
  const [form, setForm] = useState<AdminForm>(initialForm);
  const [pic, setPic] = useState<FileList | null>();
  const [error, setError] = useState<string>();

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    e?.preventDefault();
    setError("");
    setForm({ ...form, [e.currentTarget?.id]: e.target?.value });
  };

  const HandleImage = (e: ChangeEvent<HTMLInputElement>) => {
    const d = e.currentTarget.files;
    setPic(d);
  };

  const check_input = (form: AdminForm) => {
    const keys: Keys[] = Object.keys(form) as Keys[];
    return keys.filter(
      (item) => form[item] === "" || form[item] === "select option"
    );
  };

  const SubmitItem = async (e: FormEvent) => {
    e.preventDefault();
    setError(`don't leave "${check_input(form).join(",")}" empty`);
    try {
      if (error) return;

      const links = await imageUpload(pic as FileList);
      await Axios.post(
        "http://localhost:3000/items",
        { ...form, image: links },
        {
          headers: {
            authorization: `Bearer ${auth}`,
            "content-type": "application/json",
          },
        }
      );
      setForm(initialForm);
      setError("uploaded successfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form style={{ top: "5vh" }} encType="multipart/">
      <Heading>Hello Admin, Please Fill in the Form to upload an Item</Heading>
      {error && <Error>{error}</Error>}
      <label>
        <p> Item Name</p>
        <Input
          type="text"
          id="itemname"
          required
          placeholder="item name"
          value={form.itemname}
          onChange={handleChange}
        />
      </label>
      <label>
        <p>Price</p>
        <Input
          type="text"
          id="price"
          required
          placeholder="price e.g, 6000"
          value={form.price}
          onChange={handleChange}
        />
      </label>
      <DropDown setForm={setForm} form={form} />
      <label>
        <p>Quantity</p>
        <Input
          type="text"
          required
          placeholder="Quantity"
          value={form.quantity}
          id="quantity"
          onChange={handleChange}
        />
      </label>
      <label>
        <p>Image {pic?.length}</p>
        <ImageInput
          type="file"
          id="image"
          accept="image/*"
          multiple
          required
          onChange={HandleImage}
          name="file"
        />
      </label>
      <label>
        <p>Description</p>
        <TextArea
          id="description"
          required
          value={form.description}
          placeholder="price e.g, 6000"
          onChange={handleChange}
        ></TextArea>
      </label>
      <button onClick={SubmitItem}>Add Item</button>
    </Form>
  );
}

const mapStateToProps = ({ authenticate }: { authenticate: stateData }) => ({
  auth: authenticate.auth.token,
});
export default connect(mapStateToProps)(Admin);
