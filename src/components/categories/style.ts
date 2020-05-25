import styled from 'styled-components';

export const Container = styled.section`
         min-width: 300px;
         max-width: 300px;
         height:80vh;
         position: relative;
         z-index: 5;
         align-self: flex-start;
         background: grey;

         @media (max-width: 999px) {
           position: fixed;
           left: -300px;
           /* top:30px; */
           z-index:15;
         }
       `;

export const Cat = styled.div`
    width:100%;
    height:80vh;
    overflow-y:auto;
`

export const Ball = styled.div`
    width:auto;
    display:none;
    height:30px;
    padding:5px 10px;
    position:absolute;
    right:-74px;
    top:40px;
    color:white;
    font-weight:bold;
    transform:rotate(90deg);
    background:black;

     @media(max-width:999px){
        display:block;
    }
`

export const Content = styled.h2`
    width:100%;
    text-align:center;
    padding-top:10px;
    z-index:2;
    background:black;
    height:50px;
`

export const Category = styled.div`
    width:100%;
    height:auto;
    color:black;
    padding:10px;
    display:flex;
    flex-direction:column;
    align-items:flex-start;
`;

export const Name = styled.h3`

`;

export const List = styled.div`
    padding-left:10px;
    display:flex;
    height:auto;
    flex-direction:column;
    
    a{
        text-decoration:none;
        color:inherit;

        :hover{
            color:white;
        }
    }

`;
