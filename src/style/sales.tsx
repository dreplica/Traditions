import styled from "styled-components";

export const Latest = styled.div`
  width:90%;
  margin:auto;
  display:flex;
  flex-direction:row;
  flex-wrap:wrap;
  justify-content:space-around;
  align-items:center;

`

export const Sort = styled.div`
    width:88%;
    display:flex;
    justify-content:flex-end;
    margin:auto;
    
    div{
        display:flex;
        justify-content:center;
        align-items:center;
        width:300px;
    button{
            padding:8px;
            color:grey;
            font-weight:bolder;
            border:1px solid black;
            margin:3px;
        :hover{
            color:black;
        }
        }
        .active{
            border:2px solid red !important;
            }
    }
`