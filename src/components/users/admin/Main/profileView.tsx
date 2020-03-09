import React, { useState,useEffect, MouseEvent, useRef } from 'react'
import Axios from 'axios'
import { objectData } from '../../../../store/reducers/items'
import OneComponent from '../../labels/OneComponent'
import { Route, Switch, Link } from 'react-router-dom'
import { 
    Addreview,Reviews, 
    Container,TabView,
    AboutStyle,Links,Product } from './profilestyle'
import one from '../../../../img/agba2.jpg'

const Profile = () => {
  return <CoverPage />
}
export default Profile


const CoverPage = () =>{
    return <>
    <Container>
        <About />
          <Details />  
          <Tabs />
    </Container>
    </>
}

const Tabs = () =>{
    return <TabView>
            <Switch>
            <Route path='/seller/product'>
                <Products id={`ff`} token={`jk`}/>
            </Route>
            <Route path='/seller/reviews'>
                <Review id={`ff`} token={`jk`}/>
            </Route>
            <Route path='/seller/location'>
                <Location id={`ff`} token={`jk`}/>
            </Route>
        </Switch>
        </TabView>
}

const Details = () =>{
    return <>
    <Links>
        {/* to be spread across the whole page for viewing */}
        <Link to='/seller/product'>Products</Link>
        <Link to='/seller/reviews'>Review</Link>
        <Link to='/seller/location'>location</Link>
    </Links>
    </>
}
const About = () =>{
    console.log('started')
    return <>
    <AboutStyle>
        <div className="image">
            <img src='https://bit.ly/2VWZVld' alt=''/>
          </div> 
            <div className='info'>
                <h1>Adejo David Design's</h1>
                <h2>Tailor</h2>
                <p>fb twt inst</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                    Enim dolore eos veniam. Minima nisi animi ab unde 
                    minus officia maxime, quod suscipit voluptates! Possimus 
                    pariatur ipsam incidunt. Quia, suscipit eos laudantium vero hic 
                    dolorum iure aliquam error facilis non maiores soluta cupiditate 
                    repellat ullam, consectetur quasi dicta iste voluptatibus harum!</p>
            </div>
    </AboutStyle>
    </>

}
const Products:React.FC<{id:string,token:string}> = ({id,token}) =>{
    // const [product, setproduct] = useState<objectData[]>([])
    console.log('product')

    // useEffect(() => {
    //   Axios.get(`http://localhost:3000/sellerproducts/${id}`,{
    //       headers:{
    //           authorization:`Bearer ${token}`
    //       }
    //   }).then((res)=>setproduct(res.data))
    // }, [])
    const products = Array.from({length:10})
    return <Product>
        {products.map((_,index)=><OneComponent 
        key={index}
        id = {"0"}  
        name = { "gro"} 
        desc = { "jnjknjn"}
        image = {"Agbada1582886477226.jpg"}
        price = {"90909"}/> 
        )}
    </Product>

}
const Location:React.FC<{id:string,token:string}> = ({id,token}) =>{
    const [location, setLocation] = useState<string>("coordinate")
    console.log('location')
    useEffect(() => {
      Axios.get(`http://localhost:3000/user/${id}`,{
          headers:{
              authorization:`Bearer ${token}`
          }
      }).then((res)=>setLocation(res.data))//get just the location
    }, [])
    return <>
    <p>Hello a map is here to my location</p>
    </>
}

const Review:React.FC<{id:string,token:string}> = ({id,token}) =>{
    const [reviews, setReviews] = useState<objectData[]>([])
    console.log('review')
    useEffect(() => {
      Axios.get(`http://localhost:3000/reviews/${id}`,{
          headers:{
              authorization:`Bearer ${token}`
          }
      }).then((res)=>setReviews(res.data))//get just the location
    }, [])
    return <Reviews>
    <AddReview id={id}/>
    <div className='reviews'>
        {[',',',',',',',',].map((_,index)=><div key={index} id='review'>
            <h3>username</h3>
            <p>very interesting cloths they sell, i want to order more</p>
            </div>)}
    </div>
    </Reviews>

}
const AddReview = ({id}:{id:string}) =>{
    const ref = useRef<HTMLTextAreaElement>(null)
    const addto_review = (e:MouseEvent) =>{
        Axios.post(`http://localhost:3000/reviews/${id}`,{
            review:ref.current?.value
        })
    }
    return <>
    <Addreview>
        <label>
           Write  Review
            <textarea ref={ref}></textarea>
        </label>
        <button onClick={addto_review}>Comment</button>
    </Addreview>
    </>
}