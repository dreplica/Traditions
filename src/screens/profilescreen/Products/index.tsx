import React, { useState } from "react";

import { ITEMS } from "../../../ReusableComponents/theme/types";
import Cards from "../../../ReusableComponents/Cards";
import { Container } from "./style";

interface Iprops {
  id?: string;
}

export default function Products(props: Iprops) {
  const [product, setproduct] = useState<ITEMS[]>([])
  // useEffect(() => {
  // get the seller id from route,
  //no token needed
  //   Axios.get(`http://localhost:3000/sellerproducts/${props.id}`,{
  //       headers:{
  //           authorization:`Bearer ${token}`
  //       }
  //   }).then((res)=>setproduct(res.data))
  // }, [])

  const products = Array.from({ length: 10 });
  return (
    <Container>
      {products.map((_, index) => (
        <Cards
          key={index}
          id={"0"}
          itemname={"gro"}
          description={"jnjknjn"}
          image={"Agbada1582886477226.jpg"}
          price={"90909"}
        />
      ))}
    </Container>
  );
}

// export default {}
