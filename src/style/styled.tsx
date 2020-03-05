import styled from 'styled-components';

export const Headers = styled.header`
    width:90%;
    display:flex;
    flex-direction:row;
    justify-conten:flex-start;
    margin:auto;
    position:relative;
    // background:red;
    font-size:40px;
    font-weight:bolder;
    margin:30px 0px 3px 30px;
    
    .profile{
        width:50px;
        height:50px;
        margin-right:5px;
        background:orange;
        border-radius:50%;
        overflow:hidden;
        
        img{
            width:100%;
        }

        div{
            position:absolute;
            z-index:100;
            font-size:16px;
            width:90px;
            transition:height 2s;
            background:rgba(0,0,0,0.8);
            display:none;

            ul{
                color:white;
                margin:0px 5px;
                display:flex;
                flex-direction:column;
                padding:0px;
            }

            li{
                list-style:none;
                text-align:center;
                
            }
            a{
                text-decoration:none;
                color:grey;
                display:flex;
                align-items:center;
                padding:4px;
                margin:5px 0px;
                        
                        :hover{
                            cursor:pointer;
                            color:white;
                        }
                    }
        }
    }

    .heading{
        display:flex;
        width:90%;
        flex-direction:row;
        justify-content:space-between;
        }

        & span{
            background:linear-gradient(to right, orange,purple);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            
            & sup{
                font-size:17px;
            }
            
        }
        .menu-but{
            display:none;
        }
    
    @media(max-width:999px){
        .menu-but{
            display:block;
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

