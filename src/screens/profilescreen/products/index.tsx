import React from 'react'

import Cards from '../../../reusablecomponent/cards'
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
        {/* {products.map((item, index) => <Cards
            key={index}
            item={item}/>
        )} */}
    </Container>)
}

// export default {}