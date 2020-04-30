import React, { FormEvent, ChangeEvent, useState, useRef, Fragment } from 'react';
import { connect } from 'react-redux';
import { loadData } from '../../../store/actionCreators/actiontypes';
import { Form,Container, AdminForm } from '../style';
import { useHistory } from 'react-router-dom';
import Axios from 'axios';


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
    admin:boolean;
    phone:string;
    companyname?:string;
    companydesc?:string;
    logo?:string;
    facebook?:string;
    twitter?:string;
    instagram?:string;
}

const initialForm:Form = {
    firstname:"",
    lastname:"",
    username:"",
    password:"",
    email:"",
    admin:false,
    phone:"",
    companyname:"",
    logo:"",
    companydesc:"",
    facebook:"",
    twitter:"",
    instagram:"",
}

const Signup:React.FC<Props> = ({setToken}) =>{
    const [form, setForm] = useState<Form>(initialForm)
    const logo = useRef<HTMLInputElement>(null)
    const [error, setError] = useState<string>("")
    const history = useHistory()
    const handleChange = (e:ChangeEvent<HTMLInputElement>) =>{
        e.preventDefault();
        setError("")
        setForm({...form,[e.target?.id]:e.target?.value})
    }
    const handleSubmit = (e:FormEvent) =>{
        e.preventDefault()
        console.log(form)
        //make post for profile pic here
        const formData = new FormData();
        const name = ((form?.companyname as string) + Date.now() + ".jpg")
        setForm({ ...form, logo: name })
        const img = logo.current?.files?.item(0) as Blob
        formData.set('file', img as File, name)
        console.log(formData.values())
        Axios.post('http://localhost:3000/upload',formData)
        .then(()=>{
            //make post for remaining for here
            Axios.post('http://localhost:3000/signup',{...form,logo:name},{
            headers:{
                'content-type':'application/json'
            }}
            ).then((res)=>res.data)
            .then((token)=>{ 
                (token?.token)?setToken(token):setError(token.error);
                (token?.token && history.push('/home'))
            }).catch(err=>console.log(err))
        })
    }

    return (
      <Fragment>
    <Container>
        <div className='log'>
            <h3>Register</h3>
            <div className="line"></div>
        </div>
        <div>Register and get awesome african traditional fashion
            <br/>
                already have an account ? <a href="/" className="forget">Login</a>
        </div>
    </Container>
    <Form> 
        <span>{error}</span>
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
        <label className='checkbox'> Sell Cloths
        <input placeholder="" type='checkbox' id="admin" onChange={(e)=>setForm({...form,admin:(form.admin?false:true)})} /> 
        </label>
        <AdminForm style={{display:form.admin ?'block':'none'}}>
            <label> Company Name
                <input placeholder="e.g Versace" type='text' id="companyname"  value={form.companyname} onChange={handleChange} />
            </label>
            <label> Company Logo
                <input  type='file' id="logo"  ref={logo} />
            </label>
            <label> company description
                <textarea placeholder="e.g we are the largest..."
                 value={form.companydesc} 
                 onChange={(e)=>setForm({...form,companydesc:e.target.value})}>
                     
                 </textarea>
            </label>
            <label> facebook link
                <input placeholder="https://facebook.com/aba.hi" type='text' id="facebook"  value={form.facebook} onChange={handleChange} />
            </label>
            <label> twitter link
                <input placeholder="https://twitter.com/aba.hi" type='text' id="twitter"  value={form.twitter} onChange={handleChange} />
            </label>
            <label> instagram link
                <input placeholder="https://instagram.com/aba.hi" type='text' id="instagram"  value={form.instagram} onChange={handleChange} />
            </label>
        </AdminForm>
        <label> 
        <input placeholder="phone" type='phone' id="phone"  value={form.phone} onChange={handleChange} />
        </label>
        <label> 
        <input placeholder="password" type='password' id="password"  value={form.password} onChange={handleChange} />
        </label>
        <button type="submit" onClick={handleSubmit}>Register</button>
    </Form>
    </Fragment>
  );
}



export default connect(null,{setToken:loadData,})(Signup)