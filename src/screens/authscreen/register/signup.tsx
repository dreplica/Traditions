import React, { FormEvent, useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import Axios from "axios";

// import {
//   loadData,
//   Auth_Action,
// } from "../../../store/actionCreators/authenticate";
// import { SIGNUP_FORM } from "../../../ReusableComponents/theme/types";
// import { stateData } from "../../../store/reducers/authentication";
// import { ImageInput } from "../../Adminscreen/Upload/style";
// import Socialmedia, { mediaLinks } from "./socialmedia";
// import TextInput, { inputRef } from "./textInput";
// import validateRegistration from "./validateForm";
// import { Container, Form, Content, AdminForm } from "../style";
// import { itemState } from "../../../store/reducers/items";
// import { registrationFrom } from "../../../store/actionCreators/items";

// interface Iprops {
//   setToken: (args: Auth_Action["payload"]) => void;
//   auth: string;
//   form: SIGNUP_FORM;
//   setForm: (arg: any) => void;
// }

// function Signup(props: Iprops) {
//   // const [form, setForm] = useState<SIGNUP_FORM>(props.form);
//   const [error, setError] = useState<string>("");
//   const history = useHistory();


//   const handleSubmit = async (e: FormEvent) => {
//     e.preventDefault();
//     console.log(props.form);
//     const valid = validateRegistration(props.form);

//     if (valid) {
//       setError(valid as string);
//       return; 
//     }

//     try {
//       const result = await Axios.post("http://localhost:3000/signup", props.form);
//       props.setToken(result.data);
//       console.log("res", result.data);
//       // history.push("/");
//     } catch (error) {
//       setError(error.message);
//       console.log("error", error.message);
//     }
//   };

//   if (props.auth.length) {
//     history.push("/");
//   }

//   return (
//     <Container>
//       <Content>
//         <div className="log">
//           <h3>Register</h3>
//           <div className="line"></div>
//         </div>
//         <div>
//           Register and get awesome african traditional fashion
//           <br />
//           already have an account ?
//           <a href="/signin" className="forget">
//             Login
//           </a>
//         </div>
//       </Content>
//       <Form>
//         <span>{error}</span>
//         {inputRef.map((item, index) => (
//           <TextInput value={item} key={index} />
//         ))}
//         <label className="checkbox">
//           Sell Cloths
//           <input
//             placeholder=""
//             type="checkbox"
//             value={props.form.admin}
//             id="admin"
//             onChange={(e) => props.setForm({ ...props.form, admin: props.form.admin ? 0 : 1 })}
//           />
//         </label>
//         <AdminForm style={{ display: props.form.admin ? "block" : "none" }}>
//           <label>
//             Company Name
//             <input
//               placeholder="e.g Versace"
//               type="text"
//               id="companyname"
//               value={props.form.companyname}
//               onChange={(e) =>
//                 props.setForm({ ...props.form, companyname: e.target.value })
//               }
//             />
//           </label>
//           <label>
//             Company Logo
//             <ImageInput
//               type="file"
//               id="image"
//               accept="image/*"
//               required
//               // onChange={HandleImage}
//               name="file"
//             />
//           </label>
//           <label>
//             company description
//             <textarea
//               placeholder="e.g we are the largest..."
//               value={props.form.companydesc}
//               onChange={(e) =>
//                 props.setForm({ ...props.form, companydesc: e.target.value })
//               }
//             ></textarea>
//           </label>
//           {mediaLinks.map((link, index) => (
//             <Socialmedia value={link} key={index} />
//           ))}
//         </AdminForm>
//         <button type="submit" onClick={handleSubmit}>
//           Register
//         </button>
//       </Form>
//     </Container>
//   );
// }

// const mapStateToProps = ({
//   authenticate,
//   ItemsReducer,
// }: {
//   authenticate: stateData;
//   ItemsReducer: itemState;
// }) => {
//   return {
//     auth: authenticate.auth.token,
//     form: ItemsReducer.reg_form,
//   };
// };

// export default connect(mapStateToProps, { setToken: loadData, setForm: registrationFrom  })(Signup);


export default {}
