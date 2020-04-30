import styled from 'styled-components';

export const Searcher = styled.div`
    width:40%;
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
        border-bottom:0px grey solid;

        &:focus{
        background:white;
        color:black;  
        }

    }
    button{
            width:50px;
            height:39.9px;
            background:white;
            border:0px;
            border-radius:0px 15px 15px 0px;
            color:darkgrey;

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
    align-items:start;
`