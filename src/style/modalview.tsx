import styled from 'styled-components';

export const Modall = styled.div`
  overflow:hidden;
  width:100%;
  height:100vh;
  overflow-y:auto;
  position:fixed;
  z-index:10;
  background:rgba(0,0,0,0.6);

    .close{
        position:absolute;
        color:white;
        font-size:30px;
        top:5vh;
        z-index:100;
        left:80%;

        &:hover{
            cursor:pointer;
        }
    }
    .main-modal{
        width:80%;
        margin:20px auto;
        position:relative;
        top:15vh;
        height:auto;
        display:flex;
        flex-direction:row;
        justify-content:space-around;

        .image{
            width:35%;
            height:40vh;
            
            img{
                transition: transform 3s;
                border-radius:20px;
                width:100%;

                :hover{
                    transform:scale(1.1);
                }
            }
        }

        .description{
            width:50%;
            margin-top:20px;
            display:flex;
            flex-direction:column;
            color:white;
            border-radius:0px 0px 20px 20px;
            background:rgba(0,0,0,0.7);
            font-weight:bold;
            
        h2{
                padding:0px 10px;
                margin:0px auto;
            }
        .desc{
            height:30vh;
            padding:10px;
            overflow-y:auto;
        }

        .size{
            display:flex;
            padding:10px;
            width:150px;
            justify-content:space-between;
            align-items:center;
        }
            select{
                width:60px;
                background:darkgrey;
                color:black;
                border:0px;
                height:30px;

            }

            .price-modal{
                text-align:center;
                font-weight:bolder;
            }

            button{
                border-radius:inherit;
                width:100%;
                height:40px;
                border:0px;
                color:lightgrey;
                background:linear-gradient(to right, orange,purple);
    
                &:hover{
                    color:white;
                }
            }

        }

    }

    @media(max-width:750px){
        padding:5px;
        width:95%;
        height:100vh;
        margin:auto;

        .main-modal{
            width:95%;
            top:5vh;
            flex-direction:column;
            height:auto;
            justify-content:center;
            align-items:center;

            .image{
                width:50%;
                height:auto;
            }

            .description{
                width:90%;
            }
        }
    }
`;