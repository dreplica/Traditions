import styled from 'styled-components';

export const Nav = styled.nav`
    width:100%;
    margin:auto;
    border-bottom:1px solid orange;
    
    .close{
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
                margin:auto;
                text-decoration:none;
                padding:12px;
                
                & a{
                    display:flex;
                    justify-content:space-between;
                    align-items:center;
                    font-size:20px;
                    text-decoration:none;
                    font-weight:bolder;
                    color:inherit;
                    
                    span{
                        margin-left:5px;
                    }

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
                    }
                }
            }
        }

    @media(max-width:999px){
        border:none;
        height:84vh;
        border-top:1px solid orange;

        .close{
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