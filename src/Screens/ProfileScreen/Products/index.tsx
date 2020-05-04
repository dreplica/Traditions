import React from 'react'

import Cards from '../../../ReusableComponents/Cards'
import {
    Container
} from './style'

interface Iprops {
    id: string;
    token: string;
}

export default function Products({ id, token }: Iprops) {
    // const [product, setproduct] = useState<objectData[]>([])
    // useEffect(() => {
    //   Axios.get(`http://localhost:3000/sellerproducts/${id}`,{
    //       headers:{
    //           authorization:`Bearer ${token}`
    //       }
    //   }).then((res)=>setproduct(res.data))
    // }, [])

    const products = Array.from({ length: 10 })
    return (<Container>
        {products.map((_, index) => <Cards
            key={index}
            id={"0"}
            name={"gro"}
            desc={"jnjknjn"}
            image={"Agbada1582886477226.jpg"}
            price={"90909"} />
        )}
    </Container>)
}

// export default {}