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

export const Items = styled.div`
  display:flex;
  flex-direction:row;
  flex-wrap:wrap;
  justify-content:center;
  /* align-items:center; */
  width:100%;
`