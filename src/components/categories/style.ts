import styled from 'styled-components';

export const Container = styled.section`
    width:300px;
    align-self:flex-start;
    background:grey;
    @media(max-width:999px){
        display:none;
    }
        
`;

export const Content = styled.h2`
    width:100%;
    text-align:center;
    padding-top:10px;
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
    }

`;
