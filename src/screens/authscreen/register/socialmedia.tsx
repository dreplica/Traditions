// import React, { Fragment, ChangeEvent } from "react";
// import { connect } from "react-redux";

// import { itemState } from "../../../store/reducers/items";
// import {
//   SIGNUP_FORM,
//   SIGNUP_KEY,
// } from "../../../ReusableComponents/theme/types";
// import { registrationFrom } from "../../../store/actionCreators/items";

//  type InputContext = Omit<
//   SIGNUP_KEY,
//    "firstname" | "lastname" | "username" | "email" | "password" | "phone" | "companyname" | "companydesc" | "logo" 
// >;

// interface Iprops {
//   setForm: (arg: any) => void;
//   reg_form: SIGNUP_FORM;
//   value: InputContext;
// }

// function TextInput(props: Iprops) {
//   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
//     console.log(e.currentTarget.value);
//     console.log(props.value, "value")
//     const item = { [props.value as any]: e.currentTarget.value };
//     console.log("is item", item)
//     props.setForm(item);
//   };

//   return (
//     <Fragment>
//       <p>{props.value}</p>
//       <input
//         placeholder={`${props.value}`}
//         type='text'
//         id={props.value as string}
//         value={props.reg_form[props.value as SIGNUP_KEY] ?? ""}
//         onChange={handleChange}
//       />
//     </Fragment>
//   );
// }

// const mapStateToProps = ({ ItemsReducer }: { ItemsReducer: itemState }) => {
//   return {
//     reg_form: ItemsReducer.reg_form,
//   };
// };

// export default connect(mapStateToProps, { setForm: registrationFrom })(
//   TextInput
// );

// export const mediaLinks = ["facebook", "instagram", "twitter"];

export default {}