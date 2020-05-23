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
  border:0px;
  text-align:center;
  font-weight:bolder;
  border-radius:20px;
  margin:5px;
`

export const Items = styled.div`
  display:flex;
  flex-wrap:wrap;
  justify-content:space-evenly;
  align-items:center;
  /* padding:20px; */
  width:100%;

  :after{
    content:"";
    flex:0 0 250px;
    /* margin:auto; */
    /* background:red; */
    height:10px;
  } 
`