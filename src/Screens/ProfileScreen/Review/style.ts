import styled from 'styled-components';

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