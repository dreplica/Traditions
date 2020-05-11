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
`;

export const Buy = styled.button`
  width: 30%;
  padding: 10px;
  border: 0px;
  font-weight: bold;
  background: orange;
  color: whitesmoke;
  border-radius: 20px;

  :hover {
    color: black;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px auto;
`;

export const Count = styled.p`
  font-size: 20px;
`;

export const Display = styled.div`
  width: 100%;
  height: 60vh;
  overflow-y: auto;
`;

export const ShowCart = styled.div`
  width: 100%;
  position: relative;
`;

export const Total = styled.h2`
  margin-top: 10px;
`;
