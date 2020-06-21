import React, { FormEvent, ChangeEvent, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { login } from '../../../store/actioncreator/actiontypes';
import {
    Container,
    Content,
    Form,
    Label,
    Input
} from '../style';
import { stateData } from '../../../store/reducers/authentication';
import InputField from '../register/textinput';


export type dataType = {[key:string]:number|string}

interface Form{
    password:string;
    email:string;
}

interface iProps  {
    login({ email, password }: Form): void;
    auth?: string;
    error:string
}


const initialForm:Form = {
    password:"",
    email:"",
}

function Login(props:iProps){
    const history = useHistory()
    const [state, setState] = useState({
        form: initialForm,
    })

    useEffect(() => {
        (props.auth?.length) &&  history.push('/')
    }, [props.auth]) 

    const handleChange =(type:string)=> (e:ChangeEvent<HTMLInputElement>) =>{
        e.preventDefault();
        const value = e.currentTarget.value
        setState(prev => {
            return {
                ...prev,
                form:{...prev.form,[type]:value}
            }
        }) 
    }
    const handleSubmit = (e:FormEvent) =>{
        e.preventDefault()
        props.login(state.form)
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
            <span>{props.error}</span>
        <Label>  
        <InputField placeholder='Email' type='email'  value={state.form.email} changeHandeler={(e)=>handleChange('email')(e)} />
        </Label>
        <Label>  
        <InputField  placeholder='Password' type='password' value={state.form.password} changeHandeler={(e)=>handleChange('password')(e)} />
        </Label>
        <button type="submit" onClick={handleSubmit}>Login</button>
        </Form>
      </Container>
  ); 
} 

const mapStateToProps = ({authenticate}:{authenticate:stateData}) => {
    return {
        auth:authenticate.data.auth?.token,
        error:authenticate.error as string
    }
} 


export default connect(mapStateToProps,{login,})(Login)