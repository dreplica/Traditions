import styled from 'styled-components';

export const Container = styled.div`
  display:flex;
  width:40%;
  margin:auto;
  background:white;
  border-radius:20px;
  min-height:45px;
  flex-direction:column;
  justify-content:center;
  align-items:center;

  @media(max-width:999px){
    margin:10px auto;
    width:50%;
    align-self:center;
  }
`

export const Searchinput = styled.form`
  display:flex;
  width:100%;
  justify-content:space-between;
  padding-right:10px;
  align-items:center;

  & input{
    width:90%;
    border:0px;
    border-radius:20px 0px 0px 20px;
    padding:6px 15px;
    font-size:20px;
    height:40px;
  }
`;


export const DropList = styled.ul`
  width:40%;
  height:auto;
  margin: 6% auto;
  padding: 0px;
  position: absolute;
  background:white;

  li{
      width:100%;
      padding:10px 0px; 
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
           margin-left:10px;
           text-decoration:none;

        }
  }
`;
