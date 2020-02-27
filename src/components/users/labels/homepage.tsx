import React, { FormEvent, ChangeEvent, useState } from 'react';
import { connect } from 'react-redux';
import { loadData } from '../../../store/actionCreators/actiontypes';
import Navigation from '../../header/NavigationBar';


export type dataType = {[key:string]:number|string}

type Props = {
    setToken:(args:string)=>void
}

interface Form{
    firstname:string;
    lastname:string;
    username:string;
    password:string;
    email:string;
    phone:string;
    categoryname:string;
    categoryimage:string;
}

const initialForm:Form = {
    firstname:"",
    lastname:"",
    username:"",
    password:"",
    email:"",
    phone:"",
    categoryname:"",
    categoryimage:"",
}

const Homepage:React.FC = () =>{
    
  return (
      <div>
          <Navigation />
      </div>
  );
}

export default Homepage
//connect(null,{setToken:loadData,})(Signup)