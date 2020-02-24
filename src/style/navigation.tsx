import styled from 'styled-components';

export const Nav = styled.nav`
    width:100%;
    margin:auto;
    border-bottom:1px solid orange;
    
    .close{
        // display:none;
        position:absolute;
    }
    
    & ul{  
        width:80%;
        margin:auto;
        display:flex;
        flex-wrap:nowrap;
        flex-direction:row;
        justify-content:space-around;
        align-items:center;

            & li{
                list-style:none;
                color:grey;
                margin:auto
                text-decoration:none;
                padding:15px;
                
                & a{
                    font-size:20px;
                    text-decoration:none;
                    font-weight:bolder;
                    color:inherit;

                    sup{
                        margin:4px;
                        border:1px solid red;
                        font-size:10px;
                        background:red;
                        color:white;
                        border-radius:100%;
                        padding:4px 6px;
                    }
                    &:hover{
                        color:white;
                        // color:purple;
                    }
                }
            }
        }

    @media(max-width:816px){
        border:none;
        height:84vh;
        border-top:1px solid orange;

        .close{
            // display:block;
            position:absolute;;
            top:190px;
            width:20px;
            font-size:30px;
            left:85%;

            &:hover{
                color:white;
            }
            
        }

        ul{
            flex-direction:column;
            justify-content:flex-start;
            align-items:end;
            margin:30px;

            li{
                margin:10px;
                padding:5px;
            }
        }
    }
`

export const Searcher = styled.div`
    width:50%;
    display:flex;
    flex-direction:row;
    background:transparent;
    flex-wrap:nowrap;
    margin: 10px auto;
    align-items:center;
    justify-content:center;

    input{
        width:70%;
        padding-left:15px;
        height:40px;
        background:white;
        border:0px;
        color:white;
        border-radius:15px 0px 0px 15px;
        border-bottom:1px grey solid;

        &:focus{
        background:white;
        color:black;  
        }

    }
    button{
            width:30%;
            height:39px;
            background:lightgrey;
            border:0px;
            border-radius:0px 15px 15px 0px;
            color:darkgrey;
            font-size:16px;

            &:hover{   
                color:black;
            }
        }
`

export const Front = styled.div`
    display:flex;
    height:auto;
    width:100%;
    flex-direction:row;
`