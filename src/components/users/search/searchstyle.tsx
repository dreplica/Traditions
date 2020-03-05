import styled from 'styled-components';

export const List = styled.ul`
  width:40%;
  height:auto;
  margin:auto;
  padding:0px;
  background:white;

  li{
      width:100%;
      padding:10px 9px; 
      border-bottom:1px solid black;
      list-style:none;
      text-decoration:justify;
      text-align:left;
      font-weight:bolder;
      color:black;
      
      :hover{
          cursor:pointer;
          background:black;
          color:white;
        }
        a{
           color:inherit;
           text-decoration:none;

        }
  }
`;
