import React, { FormEvent, ChangeEvent, useState, useRef } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import Axios from "axios";

import {
  loadData,
  Auth_Action,
} from "../../../store/actionCreators/authenticate";
import { SIGNUP_FORM } from "../../../ReusableComponents/theme/types";
import { Container, Form, Content, AdminForm } from "../style";
import { stateData } from "../../../store/reducers/authentication";
import { ImageInput } from "../../Adminscreen/Upload/style";
import Socialmedia, { mediaLinks } from "./socialmedia";
import TextInput, { inputRef } from "./textInput";
import validateRegistration from "./validateForm";

interface Iprops {
  setToken: (args: Auth_Action["payload"]) => void;
  auth: string;
}

function Signup(props: Iprops) {
  const [form, setForm] = useState<SIGNUP_FORM>(SIGNUP_FORM);
  const [error, setError] = useState<string>("");
  const history = useHistory();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setError("");
    setForm({ ...form, [e.target?.id]: e.target?.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    alert(form.admin)
    const valid = validateRegistration(form);

    if (valid) {
      setError(valid as string);
      return
    }

    try {
      const result = await Axios.post("http://localhost:3000/signup", form);
      props.setToken(result.data);
      console.log("res", result.data);
      // history.push("/");
    } catch (error) {
      setError(error.message);
      console.log("error", error.message);
    }
  };


  if (props.auth.length) {
    history.push("/");
  }

  return (
    <Container>
      <Content>
        <div className="log">
          <h3>Register</h3>
          <div className="line"></div>
        </div>
        <div>
          Register and get awesome african traditional fashion
          <br />
          already have an account ?
          <a href="/signin" className="forget">
            Login
          </a>
        </div>
      </Content>
      <Form>
        <span>{error}</span>
        {inputRef.map((item, index) => (
          <TextInput setForm={""} value={item} />
        ))}
        <label className="checkbox">
          Sell Cloths
          <input
            placeholder=""
            type="checkbox"
            value={form.admin}
            id="admin"
            onChange={(e) => setForm({ ...form, admin: form.admin ? 0 : 1 })}
          />
        </label>
        <AdminForm style={{ display: form.admin ? "block" : "none" }}>
          <label>
            Company Name
            <input
              placeholder="e.g Versace"
              type="text"
              id="companyname"
              value={form.companyname}
              onChange={handleChange}
            />
          </label>
          <label>
            
            Company Logo
            <ImageInput
              type="file"
              id="image"
              accept="image/*"
              required
              // onChange={HandleImage}
              name="file"
            />
          </label>
          <label>
            
            company description
            <textarea
              placeholder="e.g we are the largest..."
              value={form.companydesc}
              onChange={(e) =>
                setForm({ ...form, companydesc: e.target.value })
              }
            ></textarea>
          </label>
          {mediaLinks.map((link, index) => (
            <Socialmedia setForm={"f"} value={link} />
          ))}
        </AdminForm>
        <button type="submit" onClick={handleSubmit}>
          Register
        </button>
      </Form>
    </Container>
  );
}

const mapStateToProps = ({ authenticate }: { authenticate: stateData }) => {
  return {
    auth: authenticate.auth.token,
  };
};

export default connect(mapStateToProps, { setToken: loadData })(Signup);
