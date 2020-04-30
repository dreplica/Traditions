import React from 'react'

interface Iprops {
    id: string;
    token: string;
}

function Products({ id, token }: Iprops) {
    // const [product, setproduct] = useState<objectData[]>([])
    console.log('product')

    // useEffect(() => {
    //   Axios.get(`http://localhost:3000/sellerproducts/${id}`,{
    //       headers:{
    //           authorization:`Bearer ${token}`
    //       }
    //   }).then((res)=>setproduct(res.data))
    // }, [])
    const products = Array.from({ length: 10 })
    return (<Product>
        {products.map((_, index) => <OneComponent
            key={index}
            id={"0"}
            name={"gro"}
            desc={"jnjknjn"}
            image={"Agbada1582886477226.jpg"}
            price={"90909"} />
        )}
    </Product>)
}