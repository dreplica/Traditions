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

export const TabView = styled.div`
       width:90%;
       margin:10px auto;
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
export const Product = styled.div`
       width:100%;
       padding:20px;
       display:flex;
       overflow-x:scroll;
       justify-content:space-between;
`

export const Reviews = styled.section`
       display:flex;
       width:100%;
       justify-content:space-between;
       max-height:400px;
       
       .reviews{
           padding:20px;
           overflow-y:auto;

           #review{
               width:90%;
               margin:10px auto;
               background:lightgrey;
               padding:10px;
               border-radius:10px;
           }
       }

       @media(max-width:740px){
           flex-direction:column;
           justify-content:center;
           align-items:center;

       }
`
export const Addreview = styled.form`
       width:40%;
       height:300px;
       display:flex;
       flex-direction:column;

       label{
           width:100%;
           display:flex;
           flex-direction:column;
           text-align:center;
           font-size:1.2rem;
           font-weight:bold;

           textarea{
               min-width:100%;
               max-width:100%;
               font-family:inherit;
               padding:10px;
               max-height:100px;
               min-height:100px;
           }
       }


       button{
           border:0px;
           border-radius:0px 0px 10px 10px;
           background:black;
           color:white;
           padding:10px;
           font-size:1.2rem;
       }

        @media(max-width:740px){
               width:80%;
               margin-bottom:10px;
           }
`