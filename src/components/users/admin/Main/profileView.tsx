// import React, { useState,useEffect, MouseEvent, useRef } from 'react'
// import Axios from 'axios'
// import { objectData } from '../../../../store/reducers/items'
// import OneComponent from '../../labels/OneComponent'
// import { Route, Switch, Link } from 'react-router-dom'
// import { 
//     Addreview,Reviews, 
//     Container,TabView,
//     AboutStyle,Links,Product } from './profilestyle'


// const Profile = () => {
//   return <CoverPage />
// }
// export default Profile


// const CoverPage = () =>{
//     return <>
//     <Container>
//         <About />
//           <Details />  
//           <Tabs />
//     </Container>
//     </>
// }

// const Tabs = () =>{
//     return <TabView>
//             <Switch>
//             <Route path='/seller/product'>
//                 <Products id={`ff`} token={`jk`}/>
//             </Route>
//             <Route path='/seller/reviews'>
//                 <Review id={`ff`} token={`jk`}/>
//             </Route>
//             <Route path='/seller/location'>
//                 <Location id={`ff`} token={`jk`}/>
//             </Route>
//         </Switch>
//         </TabView>
// }

// const Details = () =>{
//     return <>
//     <Links>
//         {/* to be spread across the whole page for viewing */}
//         <Link to='/seller/product'>Products</Link>
//         <Link to='/seller/reviews'>Review</Link>
//         <Link to='/seller/location'>location</Link>
//     </Links>
//     </>
// }
// const About = () =>{
//     console.log('started')
//     return <>
//     <AboutStyle>
//         <div className="image">
//             <img src='https://bit.ly/2VWZVld' alt=''/>
//           </div> 
//             <div className='info'>
//                 <h1>Adejo David Design's</h1>
//                 <h2>Tailor</h2>
//                 <p>fb twt inst</p>
//                 <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
//                     Enim dolore eos veniam. Minima nisi animi ab unde 
//                     minus officia maxime, quod suscipit voluptates! Possimus 
//                     pariatur ipsam incidunt. Quia, suscipit eos laudantium vero hic 
//                     dolorum iure aliquam error facilis non maiores soluta cupiditate 
//                     repellat ullam, consectetur quasi dicta iste voluptatibus harum!</p>
//             </div>
//     </AboutStyle>
//     </>

// }
// const Products:React.FC<{id:string,token:string}> = ({id,token}) =>{
//     // const [product, setproduct] = useState<objectData[]>([])
//     console.log('product')

//     // useEffect(() => {
//     //   Axios.get(`http://localhost:3000/sellerproducts/${id}`,{
//     //       headers:{
//     //           authorization:`Bearer ${token}`
//     //       }
//     //   }).then((res)=>setproduct(res.data))
//     // }, [])
//     const products = Array.from({length:10})
//     return <Product>
//         {products.map((_,index)=><OneComponent 
//         key={index}
//         id = {"0"}  
//         name = { "gro"} 
//         desc = { "jnjknjn"}
//         image = {"Agbada1582886477226.jpg"}
//         price = {"90909"}/> 
//         )}
//     </Product>

// }
// const Location:React.FC<{id:string,token:string}> = ({id,token}) =>{
//     const [location, setLocation] = useState<string>("coordinate")
//     const ref = useRef<HTMLDivElement>(null)
//     console.log('location')
//     useEffect(() => {
//       Axios.get(`http://localhost:3000/user/${id}`,{
//           headers:{
//               authorization:`Bearer ${token}`
//           }
//       }).then((res)=>setLocation(res.data))//get just the location
//       mapboxgl.accessToken = `pk.eyJ1IjoiZHJlcGxpY2EiLCJhIjoiY2p6OXV6eTM3MDBwaTNucnRkZm44MjZjayJ9.W3_lNRKchA62E0LFtQ9icg`
//       const map = new mapboxgl.Map({
//            container: "mapp",
//            style: 'mapbox://styles/mapbox/streets-v11'
//            }); 
//            getPoint(map)
//     }, [])

//     const getPoint = (map:mapboxgl.Map)=>{
//         map.on('load',()=>{
//             console.log("is mapping")
//           map.loadImage('https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Cat_silhouette.svg/400px-Cat_silhouette.svg.png',(error:Error,image:any)=>{
//                 if(error){
//                     throw new Error('couldnt load maps')
//                 }
//                 console.log(image)
//             map.addImage('seller',image)
//             map.addSource('point',{
//                 'type': 'geojson',
//                 'data': {
//                 'type': 'FeatureCollection',
//                 'features': [
//                         {
//                         'type': 'Feature',
//                         'properties':null,
//                         'geometry': {
//                         'type': 'Point',
//                         'coordinates': [0, 0]
//                                     }
//                             }
//                         ]
//                     }
//             })
//             map.addLayer({
//                     'id': 'points',
//                     'type': 'symbol',
//                     'source': 'point',
//                     'layout': {
//                     'icon-image': 'cat',
//                     'icon-size': 0.25
//                     }
//             });
//           })
        
//          })
//     }
//     return <>
//     map
//     <div id='mapp' ref={ref}></div>
//     </>
// }

// const Review:React.FC<{id:string,token:string}> = ({id,token}) =>{
//     const [reviews, setReviews] = useState<objectData[]>([])
//     console.log('review')
//     useEffect(() => {
//       Axios.get(`http://localhost:3000/reviews/${id}`,{
//           headers:{
//               authorization:`Bearer ${token}`
//           }
//       }).then((res)=>setReviews(res.data))//get just the location
//     }, [])
//     return <Reviews>
//     <AddReview id={id}/>
//     <div className='reviews'>
//         {[',',',',',',',',].map((_,index)=><div key={index} id='review'>
//             <h3>username</h3>
//             <p>very interesting cloths they sell, i want to order more</p>
//             </div>)}
//     </div>
//     </Reviews>

// }
// const AddReview = ({id}:{id:string}) =>{
//     const ref = useRef<HTMLTextAreaElement>(null)
//     const addto_review = (e:MouseEvent) =>{
//         Axios.post(`http://localhost:3000/reviews/${id}`,{
//             review:ref.current?.value
//         })
//     }
//     return <>
//     <Addreview>
//         <label>
//            Write  Review
//             <textarea ref={ref}></textarea>
//         </label>
//         <button onClick={addto_review}>Comment</button>
//     </Addreview>
//     </>
// }

export default {}