import React, { FormEvent, ChangeEvent, useState, useEffect } from "react";
import { connect } from "react-redux";
import { loadData, Auth_Action } from "../../../store/actionCreators/authenticate";
import { useHistory } from "react-router-dom";
import { Container, Content, Form, Error } from "../style";
import authenticate, { stateData } from "../../../store/reducers/authentication";

export type dataType = { [key: string]: number | string };

type Iprops = {
  setToken: (args: Auth_Action['payload']) => void;
  auth:string;
};

interface Form {
  password: string;
  email: string;
}

const initialForm: Form = {
  password: "",
  email: "",
};

function Login(props: Iprops) {
  const [form, setForm] = useState<Form>(initialForm);
  const history = useHistory();
  const [error, setError] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setError("");
    setForm({ ...form, [e.target?.id]: e.target?.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    fetch("http://localhost:3000/signin", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((res) => res.json())
      .then((token) => {
        console.log(token);
        token?.token ? props.setToken(token) : setError(token.error);
        token?.token && history.push("/");
      })
      .catch((err) => setError(err.error));
  };

  if(props.auth.length){
    history.push('/')
  }
  
  return (
    <Container>
      <Content>
        <div className="log">
          <h3>Login</h3>
          <div className="line"></div>
        </div>
        <div>
          Welcome back, Login to continue shoping traditional
          <br />
          Did you{" "}
          <a href="/" className="forget">
            forget your password ?
          </a>
          <br />
          Don't have an account ?{" "}
          <a href="/signup" className="forget">
            Register
          </a>
        </div>
      </Content>
      <Form>
        {error && <Error>{error}</Error>}
        <label>
          <input
            placeholder="Email"
            type="email"
            id="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          <input
            placeholder="Password"
            type="password"
            id="password"
            value={form.password}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit" onClick={handleSubmit}>
          Login
        </button>
      </Form>
    </Container>
  );
}

const mapStateToProps = ({authenticate}:{authenticate:stateData}) => {
  return {
    auth: authenticate.auth.token
  }
}

export default connect(mapStateToProps, { setToken: loadData })(Login);
