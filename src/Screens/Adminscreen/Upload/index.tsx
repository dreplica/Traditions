import React, { useState, ChangeEvent, FormEvent } from "react";
import { connect } from "react-redux";

import { stateData } from "../../../store/reducers/authentication";
import { ITEMS } from "../../../ReusableComponents/theme/types";
import Axios from "axios";
import DropDown from "./DropDown";
import imageUpload from "./imageUpload";
import { Form, Heading, TextArea, ImageInput, Input } from "./style";

interface Iprops {
  auth: string;
}

export interface AdminForm extends ITEMS {
  category: "accessories" | "men" | "menfoot" | "women" | "womenfoot";
  type: string;
  quantity: number;
}

const initialForm: AdminForm = {
  category: "women",
  type: "top",
  id: "",
  itemname: "",
  price: "",
  image: "",
  description: "",
  quantity: 0,
};

function Admin({ auth }: Iprops) {
  const [form, setForm] = useState<AdminForm>(initialForm);
  const [pic, setPic] = useState<FileList | null>();

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    e?.preventDefault();
    setForm({ ...form, [e.currentTarget?.id]: e.target?.value });
  };

  const HandleImage = (e: ChangeEvent<HTMLInputElement>) => {
    const d = e.currentTarget.files;
    setPic(d);
  };

  const SubmitItem = async (e: FormEvent) => {
    e.preventDefault();
    try {
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
      ).then((_) => console.log(form));
    } catch (error) {
      console.log("this form", form);
      console.log(error);
    }
  };

  return (
    <Form style={{ top: "5vh" }} encType="multipart/">
      <Heading>Hello Admin, Please Fill in the Form to upload an Item</Heading>
      <label>
        <p> Item Name</p>
        <Input
          type="text"
          id="itemname"
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
          onChange={HandleImage}
          name="file"
          placeholder="Upload view image"
        />
      </label>
      <label>
        <p>Description</p>
        <TextArea
          id="description"
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
