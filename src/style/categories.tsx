import styled from 'styled-components';

export const Category = styled.nav`
    display:flex;
    flex-direction:column;
    max-width:35%;
    justify-content:start;
    background:lightgrey;
    align-items:start;
    
    .head{
        font-size:20px;
        width:100%;
        padding:10px 0px;
        text-align:center;
        position:relative;
        background:rgb(0, 17, 17);
        font-weight:bolder;
    }

    .cat-list{

        display:flex;
        flex-direction:column;
        width:90%;
        justify-content:start;
        background:grey;
        align-items:start;
        padding:10px 10px;

    .space{
        margin-top:30px;
    }
    & ul{  
        padding:5px 0px;
        width:100%;
        margin:auto;
        display:flex;
        flex-wrap:nowrap;
        flex-direction:column;
        justify-content:center;
        align-items:start;

            & li{
                list-style:none;
                color:black;
                padding:10px 0px;
                margin:auto
                text-decoration:none;
                
                & a{
                    text-decoration:none;
                    color:inherit;
                    font-weight:bold;
                    
                    &:hover{
                        color:white;
                    }
                }
            }
        }
    }
    @media(max-width:800px){
        display:none;

    }
        
`

export const RightComponent = styled.div`
    display:flex;
    width:100%;
    justify-content:flex-start;
    align-items:center;
    flex-direction:column;

    @media(max-width:800px){
        width:100%;
        background:pink;
        margin:center;
    }
` 