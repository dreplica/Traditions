import styled from "styled-components";

export const AboutStyle = styled.div`
       width:80%;
       margin:0px auto;
       height:auto;

       .image{
           width:150px;
           margin:0px auto;
           height:150px;
           
           img{
               width:160px;
               height:160px;
               margin-top:-60px;
               margin-bottom:0px;
               position:absolute;
               border-radius:50%;
               border-bottom:3px solid purple;
           }
       }
       .info{
           width:60%;
           margin:0px auto;
           text-align:center;
       }
`;

export const Links = styled.div`
       width:90%;
       display:flex;
       flex-wrap:wrap;
       margin:20px auto;
       text-align:center;
       border-bottom:2px solid orange;

       a{
           margin:10px 30px;
           text-decoration:none;
           color:black;
           font-size:1.4rem;
           font-weight:bolder;
       }
`