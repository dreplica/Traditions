import styled from "styled-components";

export const Nav = styled.nav`
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
    height: 87vh;
    background-color: rgba(24, 17, 17, 0.8);
    border-top: 1px solid orange;
    border-bottom: 1px solid orange;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding-top: 5%;

    a {
      margin: 20px;
      width: 200px;
      padding: 5px;
    }
  }
`;
