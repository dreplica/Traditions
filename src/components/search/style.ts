import styled from 'styled-components';

export const Container = styled.div`
  display:flex;
  width:40%;
  min-height:45px;
  margin:auto;
  position:relative;
  background:white;
  border-radius:20px;
  flex-direction:column;
  justify-content:center;
  align-items:center;

  @media(max-width:999px){
    margin:10px auto;
    width:65%;
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
    outline-width:0px;
  }
`;


export const DropList = styled.div`
  width:100%;
  height:auto;
  top:50px;
  z-index:5;
  padding: 0px;
  display:flex;
  flex-direction:column;
  position: absolute;
  background:white;
  
  a{
    text-decoration:none;
    color: #000;
    padding:10px 10px;
    font-size:15px;

    :hover{
      background:black;
      color:white;
    }
  }
`;
