import React, { useState } from 'react'

//background cover like fb
//background pic in the middle
//brand name, 
//

const Profile = () => {
  return (
    <>
     <CoverPage />
      <Details />
     <Maps />
    </>
  )
}

export default Profile


const CoverPage = () =>{
    return <>
    <div>
        <img src='seller/' alt=''/>
    </div>
    </>
}

const Details = () =>{
    return <>
    <div>
        <span>About</span>
        <span>Products</span>
        <span>Location</span>
        <span>Review</span>
    </div>
    </>

}
const About = () =>{

    return <>
    </>

}
const Products = () =>{

    return <>
    </>

}
const Loaction = () =>{

    return <>
    </>

}
const Review = () =>{
    //fetch it from backendff
    return <>
    </>

}
const AddReview = () =>{

    return <>
    <label>
        Review
        <textarea></textarea>
    </label>
    </>

}