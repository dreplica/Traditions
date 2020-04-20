import React, {useState, useEffect } from 'react'
import DropTag from './dropTag'
import Profile from './Main/profileView'
import { useHistory } from 'react-router-dom'
import { stateData } from '../../../store/reducers/authentication'
import { connect } from 'react-redux'

//on loading for a buyer, the page would be all blank with the  brand name of
//the seller showing
//then the page would slide up
//here it contains the seller address
//reviews, contact, position on the map
//it also contain areas to message the seller personally

interface Iprops{
  auth: boolean;
}

function Adminprofile(props:Iprops){
   const history = useHistory()
  useEffect(() => { 
    if (!props.auth) {
      history.push('/')
    }
  }, [props.auth,history])

  return (
    <>
      {/* <>setimeout for blank page with brand name, with a button to slide the page up after data has loaded</>
      <>seller page shows up</> */}
      <DropTag name={"adejo"}/>
      <Profile />
    </>
  )
}
const mapStateToProp = ({authenticate}:{authenticate:stateData}) => ({
  auth:authenticate.data?.auth?.admin as boolean
})

export default connect(mapStateToProp)(Adminprofile)
