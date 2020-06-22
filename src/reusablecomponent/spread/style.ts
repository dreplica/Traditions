import styled from "styled-components";


export const Container = styled.div`
  display:flex;
  flex-direction:column;
  width:90%;

  @media(max-width:1000px){
      width:100%;
  }
`;

export const Sort = styled.div`
  align-self:flex-end;
`

export const Filter = styled.div`
  width:300px;
  display:flex;
  align-items:center;

`

export const Button = styled.button`
  width:85px;
  height:30px;
  outline-width:0px;
  border:0px;
  text-align:center;
  font-weight:bolder;
  border-radius:20px;
  margin:5px;

  :hover{
    color:white;
    background:black;
    border:2px solid white;
  }
`

export const Items = styled.div`
  display:flex;
  flex-wrap:wrap;
  justify-content:space-between;
  align-items:center;
  /* padding:20px; */
  width:80%;
  margin:20px auto;

  :after{
    content:"";
    flex:0 0 250px;
    margin:0px 20px;
    /* background:red; */
    height:10px;
  } 
`