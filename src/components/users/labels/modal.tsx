import React from 'react';
import styled from 'styled-components';
import two from '../../../img/five.jpg'


const Modal:React.FC<{}> = () => {
  return (
      <>
    <Modall>
        <div className='main-modal'>
            <span className='close'><strong>X</strong></span>
                {/* <div className='nav' ><p>previous</p><p>next</p></div> */}
                <div className='image'><img src={two} alt=''/></div>
                <div className='description'>
                    <h2>{`Ankara top`}</h2>
                    <p className="desc">Lorem ipsum, dolor sit amet consectetur adipisicing el
                        Modi et saepe aspernatur voluptatem animi aliquid est 
                        dolorem illo incidunt cumque, voluptatibus explicabo 
                        voluptatum dolore eligendi, amet at. Exercitationem vel 
                        velit illo corrupti aliquid repellendus minus dicta rem 
                        quia delectus omnis id possimus laudantium, laboriosam deleniti 
                        pariatur. Eum, reiciendis recusandae doloribus repellat atque 
                        amet odit iste odio tempore. Et sit culpa adipisci. Qui voluptatum 
                        ipsa harum dicta voluptates quod aliquid minima architecto animi modi 
                        saepe molestiae porro at expedita magni, adipisci ipsum omnis, cupidit
                        ate tempora. Laborum enim neque quae cumque, voluptas quisquam nostrum 
                        dolor magni recusandae voluptatem qui fugiat consectetur perferendis?</p>
                    
                    <div className='size'>
                        <p>select size:</p>
                        <select>
                            <option value='135'>135</option>
                        </select>
                    </div>
                    <button>Add to Cart</button>
                </div> 
            <div className='size'><img src='/' alt=''/></div>
        </div>
    </Modall>
    </>
  );
}


export default Modal;


export const Modall = styled.div`
  width:100%;
  height:100vh;
  position:fixed;
  z-index:10;
  background:rgba(0,0,0,0.6);

    .close{
        position:relative;
        top:10vh;
        left:80%;
    }
    .main-modal{
        width:70%;
        margin:auto;
        position:relative;
        top:20vh;
        height:auto;
        display:flex;
        flex-direction:row;
        justify-content:space-around;

        .image{
            width:35%;
            height:40vh;
            
            img{
                border-radius:20px;
                width:100%;
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
`;