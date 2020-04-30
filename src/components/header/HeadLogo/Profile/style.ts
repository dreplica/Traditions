import styled from 'styled-components';

export const Container = styled.div`
  position:relative;
  text-align:right;
  width:120px;
  height:auto;
  display:flex;
  background-color:rgba(24, 17, 17,0.5);
  flex-direction:column;
  align-items:flex-start;
  justify-content:center;

  & a{
      text-decoration:none;
      color:grey;
      font-size:1.3rem;
  }

  @media (max-width:999px){
      position:absolute;
      background-color:rgba(24, 17, 17,0.8);
      width:100%;
      height:100vh;
      padding:10%;

      & a{
          margin:20px auto;
          color:white;
      }
  }
`;
