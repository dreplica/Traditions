import React, {useState, useEffect } from 'react'
import DropTag from './dropTag'
import Profile from './Main/profileView'

//on loading for a buyer, the page would be all blank with the  brand name of
//the seller showing
//then the page would slide up
//here it contains the seller address
//reviews, contact, position on the map
//it also contain areas to message the seller personally

const Adminprofile = () => {
  return (
    <>
      {/* <>setimeout for blank page with brand name, with a button to slide the page up after data has loaded</>
      <>seller page shows up</> */}
      <DropTag name={"adejo"}/>
      <Profile />
    </>
  )
}

export default Adminprofile
