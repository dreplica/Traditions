import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border-bottom: 1px solid orange;
  position: relative;
  margin: auto;

`;

export const Content = styled.div`
      color:white;
      font-weight:bold;
      transition:background 1s;

      :hover{
           background:rgba(0,0,0,0.6);
      }

 @media(max-width:700px){
      position:absolute;
      display:flex;
      flex-direction:column;
      align-items:center;
      justify-content:center;
      width:250px;
      height:300px;
      background:rgba(0,0,0,0.6);
      transition:background 1.5s;

      :hover{
           background:rgba(0,0,0,0.0);
      }
  }

`;

export const Image = styled.img`
  width: 250px;
  height: 300px;
  
`;

export const RemoveItem = styled.h2`
  position: absolute;
  top: 20px;
  color:white;
  font-weight:bolder; 
  transition: transform 0.5s;
  right: 3%;

  :hover{
      transform:scale(1.5)rotate(360deg);
      cursor:pointer;
  }
`;
