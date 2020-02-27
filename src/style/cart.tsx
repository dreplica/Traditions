import styled from 'styled-components';


export const ContainCart = styled.div`
    background:red;
    width:90%;
    background:transparent;
    font-weight:bolder;
    display:flex;
    transition:height 3s;
    flex-direction:row;
    justify-content:flex-start;
    align-items:center;
    margin:auto;
    height:250px;
    border-bottom:1px solid white;

        .close{
            position:relative;
            font-weight:bolder;
            top:-10vh;
            left:90%;

            :hover{
                transform:scale(1.2);
                cursor:pointer;
            }
        }

        p{
        font-size:20px;
        }
        .img-cart{
            width:200px;
            height:200px;
            overflow:hidden;

            img{
                max-width:100%;
                height:100%;
                transition:3s;

                :hover{
                    transform:scale(1.3);
                }

            }
        }



`
export const Cart = styled.div`
    width:90%;
    height:auto;
    display:column;
    justify-content:center;
    align-items:center;

    .main-cart{
        width:100%;
        .cart{
            width:100%;
            height:50vh;
            overflow-y:auto;
        }
        .total{
            width:90%;
            text-align:right;
        }
    }

    .head-cart{
        width:89.9%;
        margin:auto;
        display:flex;
        justify-content:space-between;
        align-items:center;

        button{
            width:30%;
            padding:10px;
            border:0px;
            background:orange;
            color:lightgrey;
            border-radius:20px;

            :hover{
                color:black;
            }
        }
    }
`