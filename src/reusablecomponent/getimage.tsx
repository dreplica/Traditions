import React,{Component, FC} from 'react'
import styled from 'styled-components'

interface state{
    addr:string[];
    holder:string;
}



export default  (arg: string,Komponent:FC<{src:string}>) => {

    const images = arg.split(",")
    console.log("try out")

    return class extends Component<{},state>{
        constructor(props:any){
            super(props)
            this.state = {
                addr:[...images],
                holder: `https://res.cloudinary.com/dyypxjmx9/image/upload/v1592830732/`
            }
        }

        render(){
            console.log("some class things")
            const {addr,holder} = this.state
            const display = addr.map(item => <Komponent src={holder+item} />)
            return display
        }


    }

}



interface iProps {
    src: string
}

export function Imaging(props: iProps) {
    console.log("heheheh",props.src)
    return (
        <Image src={props.src} />
    );
}


const Image = styled.img`
    width:60%;
    height:100%;
    margin:auto;

    @media (max-width:700px){
        width:80%;
        height:90%;
    }
`;