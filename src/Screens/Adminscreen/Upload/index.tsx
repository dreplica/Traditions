import React, {
  useState,
  ChangeEvent,
  FormEvent,
  useRef,
  useContext,
} from "react";
import axios from "axios";
import { connect } from "react-redux";
import { stateData } from "../../../store/reducers/authentication";
import { ITEMS } from "../../../ReusableComponents/theme/types";
import { CloudinaryContext } from "cloudinary-react";
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
  const { cloudname, upload_preset } = useContext(
    CloudinaryContext.contextType
  );
  const image = useRef<HTMLInputElement>(null);
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    e?.preventDefault();
    setForm({ ...form, [e.currentTarget?.id]: e.target?.value });
  };

  const HandleImage = (e: ChangeEvent<HTMLInputElement>) => {
    // e.preventDefault();
    console.log("hello");
    const d = e.currentTarget.files;
    setPic(d);
    console.log("first", pic);
  };

  const SubmitItem = (e: FormEvent) => {
    e.preventDefault();
    handle_image_upload(pic as FileList);
    // const data = new FormData();
    // const name = form.itemname + Date.now() + ".jpg";
    // setForm({ ...form, image: name });
    // const img = image.current?.files?.item(0) as Blob;
    // data.set("file", img as File, name);
    // axios
    //   .post("http://localhost:3000/upload", data, {})
    //   .then((_) => {
    //     axios.post(
    //       "http://localhost:3000/items",
    //       { ...form, image: name },
    //       {
    //         headers: {
    //           authorization: `Bearer ${auth}`,
    //           "content-type": "application/json",
    //         },
    //       }
    //     );
    //   })
    //   .catch((err) => console.log(err.message));
  };

  const handle_image_upload = async (files: FileList) => {
    const uri = `https://api.cloudinary.com/v1_1/${"dyypxjmx9"}/upload`;

    for (let file of files) {
      try {
        const Data = new FormData();
        Data.append('file', file);
        Data.append('Content','');
        Data.append('tags','items')
        Data.append("upload_preset","yem27xol",)

        const response = await fetch(uri, {
          method: "POST",
          body: Data,
        });
        console.log(response);
      } catch (error) {
        console.log(error.message);
      }
    }
  };
  return (
    <Form style={{ top: "5vh" }} encType="multipart/">
      <Heading>Hello Admin, Please Fill in the Form to upload an Item</Heading>
      <label>
        {" "}
        {console.log("cloudname", cloudname)}
        Item Name {console.log(process.env["CLOUDNAME"])}
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
          ref={image}
        />
        {/* onChange={e=>setForm({...form,image:e.target?.files?.item(0) as File})} */}
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
