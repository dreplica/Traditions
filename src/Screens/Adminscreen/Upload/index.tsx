import React, { useState, ChangeEvent, FormEvent, useRef } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { stateData } from "../../../store/reducers/authentication";
import { Form } from "./style";

interface AdminForm {
  category: string;
  type: string;
  itemname: string;
  price: string;
  description: string;
  image: string;
  quantity: number;
}

const initialForm: AdminForm = {
  category: "",
  type: "",
  itemname: "",
  price: "",
  image: "",
  description: "",
  quantity: 0,
};

function Admin({ auth }: { auth: any }) {
  const [form, setForm] = useState<AdminForm>(initialForm);
  const image = useRef<HTMLInputElement>(null);
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    e?.preventDefault();
    setForm({ ...form, [e.currentTarget?.id]: e.target?.value });
  };

  const SubmitItem = (e: FormEvent) => {
    e.preventDefault();
    const data = new FormData();
    const name = form.itemname + Date.now() + ".jpg";
    setForm({ ...form, image: name });
    const img = image.current?.files?.item(0) as Blob;
    data.set("file", img as File, name);
    axios
      .post("http://localhost:3000/upload", data, {})
      .then((_) => {
        axios.post(
          "http://localhost:3000/items",
          { ...form, image: name },
          {
            headers: {
              authorization: `Bearer ${auth?.token}`,
              "content-type": "application/json",
            },
          }
        );
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <Form style={{ top: "5vh" }}>
      <h2 style={{ textAlign: "center" }}>
        Hello Admin, Please Fill in the Form to upload an Item
      </h2>
      <label>
        {" "}
        Item Name
        <input
          type="text"
          id="itemname"
          placeholder="item name"
          value={form.itemname}
          onChange={handleChange}
        />
      </label>
      <label>
        {" "}
        Price
        <input
          type="text"
          id="price"
          placeholder="price e.g, 6000"
          value={form.price}
          onChange={handleChange}
        />
      </label>
      <label>
        {" "}
        Select Category
        <select value={form.category} id="category" onChange={handleChange}>
          <option value="">Please select a Category</option>
          <option value="women">Women Wears</option>
          <option value="men">Men Wears</option>
          <option value="accessories">Accessories</option>
          <option value="womenfoot">Women Foot Wear</option>
          <option value="menfoot">Men Foot Wear</option>
        </select>
      </label>
      <label>
        {" "}
        Select Type
        <select value={form.type} id="type" onChange={handleChange}>
          {form.category === "" && (
            <option>you have to select category first</option>
          )}
          {form.category === "women" && (
            <>
              <option value="">Select A type</option>
              <option value="top">Top</option>
              <option value="gown">Gowns</option>
              <option value="skirt">Skirts</option>
              <option value="style">Style</option>
            </>
          )}
          {form.category === "men" && (
            <>
              <option value="">Select A type</option>
              <option value="shirt">Shirts</option>
              <option value="trousers">Trousers</option>
              <option value="short">Short</option>
              <option value="style">Style</option>
            </>
          )}
          {form.category === "accessories" && (
            <>
              <option value="">Select A type</option>
              <option value="bangles">Bangles</option>
              <option value="necklace">Necklace</option>
              <option value="waistbid">Waist bids</option>
              <option value="ring">Rings</option>
            </>
          )}
          {form.category === "womenfoot" && (
            <>
              <option value="">Select A type</option>
              <option value="sandal">Sandal</option>
              <option value="shoe">Shoe</option>
              <option value="hill">Hills</option>
            </>
          )}
          {form.category === "menfoot" && (
            <>
              <option value="">Select A type</option>
              <option value="sandal">Sandals</option>
              <option value="shoe">Shoes</option>
            </>
          )}
        </select>
      </label>
      <label>
        {" "}
        Quantity
        <input
          type="text"
          placeholder="Quantity"
          value={form.quantity}
          id="quantity"
          onChange={handleChange}
        />
      </label>
      <label>
        {" "}
        Image
        <input
          type="file"
          id="image"
          name="file"
          placeholder="Upload view image"
          ref={image}
        />
        {/* onChange={e=>setForm({...form,image:e.target?.files?.item(0) as File})} */}
      </label>
      <label>
        {" "}
        Description
        <textarea
          id="description"
          value={form.description}
          placeholder="price e.g, 6000"
          onChange={handleChange}
        ></textarea>
      </label>
      <button onClick={SubmitItem}>Add Item</button>
    </Form>
  );
}

const mapStateToProps = ({ authenticate }: { authenticate: stateData }) => ({
  auth: authenticate.data?.auth,
});
export default connect(mapStateToProps)(Admin);
