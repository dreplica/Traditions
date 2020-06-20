import styled from "styled-components";


export const Container = styled.div`
  display:flex;
  flex-direction:column;
  position:relative;
  min-width:250px;
  max-width:250px;
  margin:10px;
  height:330px;
  border-radius:0px 0px 20px 20px;
`;


export const Image = styled.img`
    width:100%;
    height:250px;
    z-index:1;
`;

export const Cover = styled.div`
    width:100%;
    height:250px;
    position:absolute;
    z-index:2;
    background:rgba(0,0,0,0.5);
`;

export const View = styled.button`
    width:30%;
    height:35px;
    position:absolute;
    z-index:3;
    top:110px;
    left:35%;
    border:1px solid white;
    color:grey;
    font-weight:bold;
    background:transparent;
    &:hover{
        color:white;
        border:3px solid white;
            }
`;

export const CartButton = styled.button`
    border-radius:0px 0px 20px 20px;
    width:100%;
    height:35px;
    border:0px;
    color:lightgrey;
    background:linear-gradient(to right, orange,purple);
    &:hover{
        color:white;
    }
`;

export const Details = styled.div`
        background:white;
        margin:0px;
        width:100%;
        border-radius:0px 0px 20px 20px; 
`;

export const Price = styled.p`
    position:absolute;
    background:white;
    color:black;
    padding:2px 5px;
    z-index:2;
`;

export const Name = styled.p`
   text-align:center;
   color:black;
`