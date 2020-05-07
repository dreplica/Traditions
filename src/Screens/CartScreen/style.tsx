import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin-top: 10px;
  flex-direction: column;
  justify-content: center;
  width: 70%;

  .none {
    position: absolute;
    animation: leave 3s forwards;
  }

  @keyframes leave {
    0% {
      right: 0px;
    }

    50% {
      right: -1000px;
    }

    100% {
      left: -100000px;
      display: none;
    }
  }

  @media (max-width: 1000px) {
    width: 100%;
  }
`;

export const Content = styled.div`
  width: 90%;
  margin: auto;
  height: auto;
  display: column;
  justify-content: center;
  align-items: center;

  .main-cart {
    width: 100%;
    .cart {
      width: 100%;
      height: 50vh;
      overflow-y: auto;
    }
    .total {
      width: 90%;
      text-align: right;
    }
  }

  .head-cart {
    width: 89.9%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Buy = styled.button`
  width: 30%;
  padding: 10px;
  border: 0px;
  font-weight:bold;
  background: orange;
  color: whitesmoke;
  border-radius: 20px;

  :hover {
    color: black;
  }
`;
