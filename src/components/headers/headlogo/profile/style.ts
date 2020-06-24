import styled from 'styled-components';
export const Container = styled.div`
         position: absolute;
         width: 150px;
         height: auto;
         padding: 8px;
         display: flex;
         background-color: whitesmoke;
         flex-direction: column;
         align-items: flex-start;
         z-index: 900;
         justify-content: center;
         & a {
           text-decoration: none;
           margin: 5px auto;
           display: flex;
           z-index: 4;
           width: 150px;
           align-items: center;
           /* color: grey; */
           font-size: 1.2rem;
           transition: transform 0.5s;
           :hover {
             /* color: whitesmoke; */
             transform: scale(1.05);
             cursor: pointer;
           }
         }
         /* 
  @media (max-width: 999px) {
    position: fixed;
    justify-content: flex-start;
    align-items: center;
    background-color: rgba(24, 17, 17, 0.9);
    width: 100%;
    padding-top: 20vh;
    height: 100vh;
    z-index: 10;
    & a {
      margin: 20px auto;
      color: white;
      text-align: left;
    }
  } */
         :before {
           content: "";
           position: absolute;
           width: 40px;
           height: 40px;
           z-index: -1;
           transform: rotate(40deg);
           top: -15px;
           left: 10px;
           background-color:inherit;
         }
       `;

export const Menu = styled.span`
  margin-left: 4px;
`;