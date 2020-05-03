import styled from 'styled-components';

export const Container = styled.div`
   width:80%;
   display:flex;
   flex-direction:column;
   min-height:100vh;
   margin:100px auto;
   background:white;
//    overflow:hidden;
   border-radius:20px;
//    box-shadow:10px 10px 10px grey;
   color:black;
   align-items:start;
   flex-wrap:wrap; 
   
   #mapp{
       width:100%;
       height:50vh;
   }
`;

export const TabView = styled.div`
       width:90%;
       margin:10px auto;
`;