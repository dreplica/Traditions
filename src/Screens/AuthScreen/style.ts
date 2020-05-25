import styled from 'styled-components';

export const Container = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:flex-start;
  align-items:center;
  width:70%;

  @media(max-width:999px){
      width:100%;
  }
`

export const Content = styled.div`
    width:350px;
    margin-top:40px;
    text-align:center;
        & .log{
            
            margin:10px auto;
            text-align:center;
            font-size:25px;

            & .line{
                width:50%;
                margin:10px auto;
                height:5px;
                border-radius:30px;
                background:linear-gradient(to right, orange,purple);
            }
        }

        & .forget{
            font-weight:bolder;
            color:purple;
            text-decoration:none;

            :hover{
                color:white;
            }
        }
        @media(max-width:500px){
            width:90%;
        }
    
`
export const AdminForm = styled.div`
    width:100%;

    .companydesc{
        min-width:200px;
        max-width:200px;
        min-height:150px;
        max-height:150px;
    }
`
export const Error = styled.p`
    text-align:center;
    margin:10px auto;
    background:red;
    padding:5px;
`

export const Form = styled.form`
    width:350px;
    margin-top:20px;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    color:white;

    label{
        margin-top:5px;
    }

     .checkbox{
        display:flex;
        align-items:center;
        justify-content:space-between;
    }

    textarea{
        min-width:100%;
        max-width:100%;
        padding:8px;
        margin-bottom:20px;
        min-height:100px;
        max-height:100px;
    } 

    input[type='checkbox']{
        width:20px;
        height:20px;
        margin-left:10px;
    }
    input[type='file']{
        height:29px;
        background:lightgrey;
        color:white;
    } 

    select{
        width:100%;
        margin:20px auto;
        padding:5px;
        height:50px;
    }

     input{
        width:100%;
        padding-left:15px;
        height:50px;
        background:white;
        margin-bottom:20px;
        border:0px;
        font-weight:bold;
        font-size:20px;
        color:black;

        &:focus{
        background:white;
        color:black;  
        }

    }

    & button{
        width:300px;
        padding:15px;
        background:transparent;
        border:0px;
        background:linear-gradient(to right, orange,purple);
        border-radius:15px;
        color:darkgrey;
        font-size:20px;
        margin:30px auto;

        &:hover{
            
            color:white;
        }
    }
    @media(max-width:500px){
        width:90%;
    }

`
