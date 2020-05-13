import React, {
  useState,
  ChangeEvent,
  FormEvent,
  useRef,
  useContext,
} from "react";
import { connect } from "react-redux";

import { stateData } from "../../../store/reducers/authentication";
import { ITEMS } from "../../../ReusableComponents/theme/types";
import { Form, Heading, TextArea, Input } from "./style";
import Axios from "axios";

interface Iprops {
  auth: string;
}

interface AdminForm extends ITEMS {
  category: string;
  type: string;
  quantity: number;
}

const initialForm: AdminForm = {
  category: "",
  type: "",
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
      const links = await handle_image_upload(pic as FileList);
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

  const handle_image_upload = async (files: FileList) => {
    const uri = `https://api.cloudinary.com/v1_1/${"dyypxjmx9"}/upload`;
    const get_link: string[] = [];
    for (let file of files) {
      try {
        const Data = new FormData();
        Data.append("file", file);
        Data.append("Content", "");
        Data.append("tags", "items");
        Data.append("upload_preset", "yem27xol");

        const response = await fetch(uri, {
          method: "POST",
          body: Data,
        });
        const result = await response.json();
        get_link.push(result?.public_id);
      } catch (error) {
        console.log(error.message);
        return;
      }
    }
    return get_link.join(",");
  };
  return (
    <Form style={{ top: "5vh" }} encType="multipart/">
      <Heading>Hello Admin, Please Fill in the Form to upload an Item</Heading>
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
        Image {pic?.length}
        <Input
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
        {" "}
        Description
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
