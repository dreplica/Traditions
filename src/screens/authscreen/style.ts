import styled from 'styled-components';

export const Container = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:flex-start;
  align-items:center;
  width:70%;
  height:100vh;

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
    margin-top:20px;

`
export const Form = styled.form`
    width:350px;
    margin-top:20px;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    color:white;

   

    textarea{
        min-width:100%;
        max-width:100%;
        padding:8px;
        min-height:100px;
        max-height:100px;
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
        height:40px;
        background:white;
        margin:10px 0px 20px 0px;
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
        outline-width:0px;
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

export const Input = styled.input`
    width:100%;
    border:0px;
    background:white;
    outline-width:0px;
  padding-left: 15px;
  height: 40px;
  color: black;
  font-size: 20px;
  margin-bottom: 20px;
  transition: width 1s;
  border-bottom: 1px grey solid;

  :focus {
    background: grey;
    border: 2px solid orange;
    color: white;
  }
`;

export const Label = styled.label`
    width:100%;
`;