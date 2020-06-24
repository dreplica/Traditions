import styled from 'styled-components';

export const Container = styled.div`
	overflow: hidden;
	width: 100%;
	height: 100%;
	overflow-y: auto;
	position: fixed;
	top: 0px;
	z-index: 100;
    display:flex;
    flex-direction:column;
	background: rgba(0, 0, 0, 0.9);

`;

export const Close = styled.a`
	position: fixed;
	color: white;
	font-size: 30px;
	top: 5vh;
	z-index: 100;
	right: 5%;

	&:hover {
		cursor: pointer;
	}
`;

export const Designer = styled.span`
	width: 100%;
	text-align: center;
	height: 40px;
	background: inherit;

    a{
        text-decoration:none;
        color: orange;

        :hover{
            color:silver;
        }
    }
`;


export const Text = styled.span`
    min-width:200px;
`

export const Button = styled.button`
	width: 100%;
	height: 40px;
	border: 0px;
	font-weight: bold;
	outline-width: 0px;
	color: lightgrey;
	background: linear-gradient(to right, orange, purple);

	&:hover {
		color: white;
	}
`;

export const Desc = styled.div`
	height: auto;
	padding: 10px;
	overflow-y: auto;
`;

export const Images = styled.div`
display: flex;
overflow-x:auto;
	height: 350px;
	width: 300px;
	margin: 5vh auto;

`;

export const Description = styled.div`
	width: 300px;
	margin: 20px auto;
	font-weight: bold;
	color: white;
	display: flex;
	flex-direction: column;
`;

export const Price = styled.div`
	display: flex;
	padding: 10px;
	width: 150px;
	justify-content: space-between; 
	align-items: center;
`;

export const Size = styled.div`
	display: flex;
	padding: 10px;
	width: 60%;
    height:30px;
	justify-content: space-between;
	align-items: center;
`;
