import styled from 'styled-components';

export const Container = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  width:90%;
  margin:40px auto;
`;

export const Heading = styled.h1`
    width:100%;
    height:40px;
    color:white;
    align-self:flex-start;
`

export const ItemContainer = styled.div`
    width:100%;
    padding:20px;
    display:flex;
    justify-content:space-between;
    overflow-x:scroll;
`
