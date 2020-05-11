import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  text-align: right;
  width: 120px;
  height: auto;
  display: flex;
  background-color: rgba(24, 17, 17, 0.5);
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  & a {
    text-decoration: none;
    margin-bottom: 5px;
    display: flex;
    width: 150px;
    align-items: center;
    color: grey;
    font-size: 1.5rem;
    transition: transform 1s;

    :hover {
      color: whitesmoke;
      transform: scale(1.2);
      cursor: pointer;
    }
  }

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
  }
`;

export const Menu = styled.span`
  margin-left: 4px;
`;

export const Cancel = styled.span`
  display: none;
  @media (max-width: 999px) {
    display: block;
    position: absolute;
    top: 30px;
    right: 10%;
    font-size: 20px;
    font-weight: bold;
    transition: transform 1s;

    :hover {
      color: whitesmoke;
      transform: scale(1.2);
      cursor: pointer;
    }
  }
`;
