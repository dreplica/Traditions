import styled from 'styled-components';


export const Headers = styled.header`
    width:80%;
    margin:auto;
    position:relative;
    font-size:40px;
    font-weight:bolder;
    padding:30px 0px 3px 30px;

        & span{
            background:linear-gradient(to right, orange,purple);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            
            & sup{
                font-size:17px;
            }
        }
`


export const Logintro = styled.div`
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

export const Form = styled.form`
    width:350px;
    position:relative;
    top:15vh;
    margin:auto;
    height:300px;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    padding:10px;
    border:0px;
    box-shadow: 5px light-grey;
    border-radius:20px;
    color:black;

    & input{
        width:100%;
        padding-left:15px;
        height:50px;
        background:transparent;
        margin:10px 0px;
        border:0px;
        transition:width 1s;
        border-bottom:1px grey solid;

        &:focus{
        width:100%;
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

