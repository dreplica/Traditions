import React, { FormEvent, ChangeEvent, useState } from 'react';
import { connect } from 'react-redux';
import { loadData } from '../../store/actionCreators/actiontypes';
import { Form, Logintro } from '../../style/styled';


export type dataType = {[key:string]:number|string}

type Props = {
    setToken:(args:string)=>void
}

interface Form{
    password:string;
    email:string;
}

const initialForm:Form = {
    password:"",
    email:"",
}

const Login:React.FC<Props> = ({setToken}) =>{
    const [form, setForm] = useState<Form>(initialForm)
    const [error, seterror] = useState({error:"",check:false})
    const handleChange = (e:ChangeEvent<HTMLInputElement>) =>{
        e.preventDefault();
        seterror({error:"",check:false})
        setForm({...form,[e.target?.id]:e.target?.value}) 
    }
    const handleSubmit = (e:FormEvent) =>{
        e.preventDefault()
        fetch('http://localhost:3000/signin',{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(form)
    }
        ).then((res)=>res.json())
        .then((token)=>{
            token?.token && setToken(token?.token)
            token?.token ?? seterror({error:token,check:true})
        })
        .catch(err=>console.log(err.error))
    }
  return ( 
      <div>
        <Logintro>
            <div className='log'>
                <h3>Login</h3>
                <div className="line"></div>
            </div>
            <div>Welcome back, Login to continue shoping traditional
                <br/>
                    Did you <a href="/" className="forget">forget your password ?</a>
            </div>
        </Logintro>   
        <Form>
            <p>{error.check && error.error}</p>
        <label>  
        <input placeholder='Email' type='email' id="email"  value={form.email} onChange={handleChange} />
        </label>
        <label>  
        <input placeholder='Password' type='password' id="password"  value={form.password} onChange={handleChange} />
        </label>
        <button type="submit" onClick={handleSubmit}>Login</button>
        </Form>
      </div>
  ); 
}


export default connect(null,{setToken:loadData,})(Login)