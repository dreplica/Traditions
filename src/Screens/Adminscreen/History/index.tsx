// import React, { useEffect, useState } from "react";
// import { connect } from "react-redux";
// import Axios from "axios";

// import { stateData } from "../../../store/reducers/authentication";
// import { ITEMS } from "../../../ReusableComponents/theme/types";
// import { HistoryStyle, Summary } from "./style";

// interface Iprops {
//   auth: string;
// }

// interface History_props {
//   category: string;
//   type: string;
//   quantity: string;
// }

// const initialHistory: History_props = {
//   category: "",
//   type: "",
//   id: "",
//   itemname: "",
//   price: "",
//   quantity: "0",
// };

// function History({ auth }: Iprops) {
//   const [data, setData] = useState<History_props[]>([initialHistory]);
//   const [loading, setLoading] = useState<boolean>(true);
//   useEffect(() => {
//     Axios.get(`http://localhost:3000/history`, {
//       headers: {
//         authorization: `Bearer ${auth}`,
//       },
//     }).then((_) => {
//       setData(unique(_.data?.payload));
//       setLoading(false);
//     });
//   }, [auth]);

//   const unique = (history: History_props[]) => {
//     let id = history.map((item: History_props) => item.id);
//     let uniqueId = new Set([...id]);
//     return [...uniqueId].map((id_) =>
//       history.reduce((acc: History_props, val: History_props) => {
//         if (val.id === id_) {
//           acc.price = String(parseFloat(acc.price) + parseFloat(val.price));
//           acc.quantity = String(parseInt(acc.quantity) + 1);
//           return { ...val, price: acc.price, quantity: acc.quantity };
//         }
//         return acc;
//       }, initialHistory)
//     );
//   };

//   if (!data.length) {
//     return <>Loading</>;
//   }

//   return (
//     <>
//       <Summary>
//         <h3>
//           Total Transaction: &#8358;
//           {data.reduce((acc, val) => parseInt(val.price) + acc, 0)}
//         </h3>
//       </Summary>
//       <HistoryStyle>
//         <thead>
//           <tr>
//             <td>S/n</td>
//             <td>Item</td>
//             <td>Quantity</td>
//             <td>Price</td>
//             <td>Status</td>
//             <td>Last Purchased Date</td>
//           </tr>
//         </thead>
//         {console.log("the table", data)}
//         <tbody>
//           {data.map((items, ind) => (
//             <tr key={ind}>
//               <td>{ind + 1}</td>
//               <td>{items.itemname}</td>
//               <td>{items.quantity}</td>
//               <td>{items.price}</td>
//               <td>{items.bought}</td>
//               <td>{new Date(items.created).toDateString()}</td>
//             </tr>
//           ))}
//         </tbody>
//       </HistoryStyle>
//     </>
//   );
// }

// const mapState = ({ authenticate }: { authenticate: stateData }) => ({
//   auth: authenticate.auth.token,
// });
// export default connect(mapState)(History);

export default {} 