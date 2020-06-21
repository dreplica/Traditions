import React, { FormEvent, ChangeEvent, useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { login } from '../../../store/actioncreator/actiontypes';
import {
    Container,
    Content,
    Form
} from '../style';


export type dataType = {[key:string]:number|string}

interface iProps  {
    login({ email, password }:{email: string;password:string}):void
}

interface Form{
    password:string;
    email:string;
}

const initialForm:Form = {
    password:"",
    email:"",
}

function Login(props:iProps){
    const [form, setForm] = useState<Form>(initialForm)
    const history = useHistory()
    const [error, setError] = useState<string>("")
    const handleChange = (e:ChangeEvent<HTMLInputElement>) =>{
        e.preventDefault();
        setError("")
        setForm({...form,[e.target?.id]:e.target?.value}) 
    }
    const handleSubmit = (e:FormEvent) =>{
        e.preventDefault()
        props.login(form)
    }
    return ( 
      <Container>
      <Content>
            <div className='log'>
                <h3>Login</h3>
                <div className="line"></div>
            </div>
            <div>Welcome back, Login to continue shoping traditional
                <br/>
                    Did you <a href="/" className="forget">forget your password ?</a>
                    <br />
                Don't have an account ? <a href="/signup" className="forget">Register</a>
            </div>
        </Content>   
        <Form>
            <span>{error}</span>
        <label>  
        <input placeholder='Email' type='email' id="email"  value={form.email} onChange={handleChange} required/>
        </label>
        <label>  
        <input placeholder='Password' type='password' id="password"  value={form.password} onChange={handleChange} required/>
        </label>
        <button type="submit" onClick={handleSubmit}>Login</button>
        </Form>
      </Container>
  ); 
}


export default connect(null,{login,})(Login)