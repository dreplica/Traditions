import React, { FormEvent, ChangeEvent, useState } from 'react';
import { connect } from 'react-redux';
import { loadData } from '../../store/actionCreators/actiontypes';
import { Form,Logintro } from '../../style/styled';


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
}

const initialForm:Form = {
    firstname:"",
    lastname:"",
    username:"",
    password:"",
    email:"",
    phone:"",
}

const Signup:React.FC<Props> = ({setToken}) =>{
    const [form, setForm] = useState<Form>(initialForm)
    const handleChange = (e:ChangeEvent<HTMLInputElement>) =>{
        e.preventDefault();
        setForm({...form,[e.target?.id]:e.target?.value})
    }
    const handleSubmit = (e:FormEvent) =>{
        e.preventDefault()
        console.log(form)
        fetch('http://localhost:3000/signup',{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(form)
    }
        ).then((res)=>res.json())
        .then((token)=>setToken(token?.token))
        .catch(err=>console.log(err))
    }

  return (
    <div>
    <Logintro>
        <div className='log'>
            <h3>Register</h3>
            <div className="line"></div>
        </div>
        <div>Register and get awesome african traditional fashion
            <br/>
                already have an account ? <a href="/" className="forget">Login</a>
        </div>
    </Logintro>
    <Form>
        <label> 
        <input placeholder="first name" type='text'  id="firstname" value={form.firstname} onChange={handleChange} />
        </label>
        <label>
        <input placeholder="last name" type='text'  id="lastname" value={form.lastname} onChange={handleChange} />
        </label>
        <label> 
        <input placeholder="username" type='text' id="username"  value={form.username} onChange={handleChange} />
        </label>
        <label> 
        <input placeholder="email"type='email' id="email"  value={form.email} onChange={handleChange} />
        </label>
        <label> 
        <input placeholder="phone" type='phone' id="phone"  value={form.phone} onChange={handleChange} />
        </label>
        <label> 
        <input placeholder="password" type='password' id="password"  value={form.password} onChange={handleChange} />
        </label>
        <button type="submit" onClick={handleSubmit}>Register</button>
    </Form>
    </div>
  );
}



export default connect(null,{setToken:loadData,})(Signup)