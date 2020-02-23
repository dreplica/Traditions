import styled from 'styled-components';

export const Category = styled.nav`
    display:flex;
    flex-direction:column;
    width:300px;
    justify-content:start;
    align-items:start;
    
    .head{
        font-size:20px;
        width:100%;
        color:white;
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

    .dropdown{
        transition:3s;
        text-align:center;
        margin-left:20px;
        height:auto;

        li{
            font-weight:bolder;
            text-align:left;
            width:100%;
            
            &:hover{
                border-bottom:1px solid white;
                color:white;
                cursor:pointer;
            }
        }

    }
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
        // background:pink;
        margin:center;
    }
` 