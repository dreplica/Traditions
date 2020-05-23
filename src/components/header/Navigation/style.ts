import styled from "styled-components";

export const Container = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
  height: auto;
  border-bottom: 1px solid orange;

  a {
    display: flex;
    width: 140px;
    height: 30px;
    margin: 10px;
    justify-content: flex-start;
    align-items: center;
    font-size: 20px;
    text-decoration: none;
    font-weight: bolder;
    color: inherit;

    span {
      margin-left: 5px;
    }

    sup {
      margin: 4px;
      border: 1px solid red;
      font-size: 10px;
      background: red;
      color: white;
      border-radius: 100%;
      padding: 4px 6px;
    }
    &:hover {
      color: white;
    }
  }

  @media (max-width: 999px) {
    height: 100vh;
    top: 0px;
    position: fixed;
    padding-top: 15vh;
    z-index: 10;
    background-color: rgba(0, 0, 0, 0.9);
    flex-direction: column;
    overflow-y: auto;
    justify-content: flex-start;
    align-items: center;

    a {
      margin-top: 20px;
      width: 200px;
      font-size:1.5rem;
      transition: transform 0.5s;

      :hover {
        color: whitesmoke;
        transform: scale(1.2);
        cursor: pointer;
      }
    }
  }
`;

export const Cancel = styled.span`
  display: none;
  @media (max-width: 999px) {
    display: block;
    position: absolute;
    top: 10vh;
    right: 20%;
    font-size: 1.5rem;
    font-weight: bold;
    transition: transform 0.5s;

    :hover {
      color: white;
      transform: scale(1.2);
      cursor: pointer;
    }
  }
`;
