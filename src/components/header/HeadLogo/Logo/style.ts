import styled from 'styled-components';

export const Container = styled.header`
    width:90%;
    display:flex;
    flex-direction:row;
    justify-content:space-around;
    margin:20px auto;
    font-size:40px;
    font-weight:bolder;
       
`;

export const Content = styled.div`
    display:flex;
    flex-wrap:wrap;
    flex:3;
    justify-content:flex-start;
    align-items:center;
`

export const Logo = styled.div`
     display:flex;
     width:50%;
     justify-content:space-between;
     align-items:center;

        & span{
            background:linear-gradient(to right, orange,purple);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            
            & sup{
                font-size:17px;
            }
            
        }
        .menu-but{
            display:none;
        }
    
    @media(max-width:999px){
        width:80%;
        margin:auto;
        .menu-but{
            display:block;
        }
    }
    
`;

export const Image = styled.div`
    width:auto;
    position:relative;
    align-self:center;
    margin-right:3px;
    height:auto;
    
    img{
        width:50px;
        border-radius:25px;

            :hover{
                cursor:pointer;
                color:white;
            }
        }
`;
