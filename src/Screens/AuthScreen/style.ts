import styled from 'styled-components';

export const Container = styled.div`
  display:flex;
  flex-direction:column;
  width:70%;

  @media(max-width:1000px){
      width:100%;
  }
`

export const Content = styled.div`
    width:350px;
    position:relative;
    top:10vh;
    text-align:center;
    margin:auto;

        & .log{
            width:50%;
            margin:10px auto;
            text-align:center;
            font-size:25px;

            & h3{
                margin:15px 0px;
            }

            & .line{
                width:100%;
                height:5px;
                margin:0px;
                border-radius:20px;
                background:linear-gradient(to right, orange,purple);
            }
        }

        & .forget{
            font-weight:bolder;
            color:purple;
            text-decoration:none;
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
export const Form = styled.form`
    width:350px;
    position:relative;
    top:15vh;
    margin:auto;
    height:auto;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    padding:10px;
    border:0px;
    box-shadow: 5px light-grey;
    border-radius:20px;
    color:black;
    
    span{
        color:white;
    }

    label,h2{
        color:white;
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
        margin:10px 0px;
        border:0px;
        transition:width 1s;
        border-bottom:1px grey solid;

        &:focus{
        background:grey;
        color:white;  
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
