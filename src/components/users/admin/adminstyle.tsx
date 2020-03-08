import styled from 'styled-components';

export const DropIT = styled.div`
  width:100;
  background-color:white; 
  color:green;
  overflow:hidden;
  text-align:center;
  
    & span{
            display:block;
            background:linear-gradient(to right, orange,purple,orange,purple);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            font-size:6rem;
            margin:10vh auto;
            font-weight:bolder;

            & #down{
                margin:0px auto 30vh auto;
            }


    }

    button{
            border-radius:inherit;
            width:100%;
            height:auto;
            font-size:2rem;
            border:0px;
            transition:3s;
            animation:turn 10s  infinite  reverse linear;
            color:lightgrey;
            background:linear-gradient(to right, orange,purple);
    
                &:hover{
                    color:white;
                }
            }
 @keyframes turn{
     0%{
        background:linear-gradient(to right, purple,orange);

     }
     20%{
        background:linear-gradient(to right, purple,orange,orange);

     }
     40%{
        background:linear-gradient(to right, purple,orange,orange,orange);

     }
     60%{
        background:linear-gradient(to right, orange,orange);
     }
     80%{
        background:linear-gradient(to right, orange,orange,);
     }
     100%{
        background:linear-gradient(to right, orange,orange);
     }
 }
`;
