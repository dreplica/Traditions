import styled from 'styled-components';

export const Container = styled.section`
    min-width:300px;
    max-width:300px;
    position:relative;
    z-index:5;
    align-self:flex-start;
    background:grey;

    @media(max-width:999px){
        position:fixed;
        left:-300px; 
    }
        
`;

export const Ball = styled.div`
    width:50px;
    display:none;
    height:50px;
    position:absolute;
    right:-30px;
    z-index:-1;
    border-radius:25px;
    background:linear-gradient(to right, orange,purple);

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
    flex-direction:column;
    
    a{
        text-decoration:none;
        color:inherit;

        :hover{
            color:white;
        }
    }

`;
