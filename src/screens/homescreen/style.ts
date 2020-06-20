import styled from 'styled-components';

export const Container = styled.div`
  display:flex;
  flex-direction:column;
  width:70%;

  @media(max-width:1000px){
      width:100%;
  }
`;
