import styled from "styled-components";

export const Form = styled.form`
  width: 350px;
  top: 15vh;
  margin: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
  border: 0px;
  box-shadow: 5px light-grey;
  border-radius: 20px;
  color: black;

  span {
    color: white;
  }

  label,
  h2 {
    color: white;
  }

  .checkbox {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  input[type="checkbox"] {
    width: 20px;
    height: 20px;
    margin-left: 10px;
  }
  input[type="file"] {
    height: 29px;
    background: lightgrey;
    color: white;
  }

  select {
    width: 100%;
    margin: 20px auto;
    padding: 5px;
    height: 50px;
  }

  input {
    width: 100%;
    padding-left: 15px;
    height: 50px;
    background: white;
    margin-bottom: 20px;
    border: 0px;
    transition: width 1s;
    border-bottom: 1px grey solid;

    &:focus {
      background: grey;
      color: white;
    }
  }

  & button {
    width: 300px;
    padding: 15px;
    background: transparent;
    border: 0px;
    background: linear-gradient(to right, orange, purple);
    border-radius: 15px;
    color: darkgrey;
    font-size: 20px;
    margin: 30px auto;

    &:hover {
      color: white;
    }
  }
  @media (max-width: 500px) {
    width: 90%;
  }
`;

export const Heading = styled.h2`
  margin-bottom: 30px;
  text-align: center;
`;

export const TextArea = styled.textarea`
  min-width: 100%;
  max-width: 100%;
  padding: 8px;
  min-height: 100px;
  max-height: 100px;
`;
