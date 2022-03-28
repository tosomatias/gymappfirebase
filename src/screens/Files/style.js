import styled from "styled-components/macro";

export const ContainerSpinner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 20% 0;
`;

export const TextSpinner = styled.p`
  color: #fff;
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  font-size: 24px;
  margin-top: 10%;
  animation-name: moveUp;
  animation-direction: alternate;
  animation-duration: 0.3s;
  animation-iteration-count: infinite;
  @keyframes moveUp {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 2% 7%;
  color: #fff;
`;

export const ContainerTraining = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0;
  margin-bottom: 5%;
  margin-right: 2%;
`;
export const Title = styled.h1`
  color: #fff;
  font-family: "Poppins", sans-serif;
  font-size: 27px;
  text-align: center;
  margin: 0.7rem 0;
`;
export const Text = styled.p`
  color: #fff;
  margin: 0;
  font-size: 16px;
  font-family: "Poppins", sans-serif;
`;

export const TextLink = styled.a`
  margin: 0;
  font-size: 16px;
  font-family: "Poppins", sans-serif;
  text-decoration: none;
  animation-name: animar;
  animation-duration: 0.3s;
  animation-timing-function: linear;
  animation-direction: alternate;
  animation-iteration-count: infinite;
  @keyframes animar {
    from {
      color: #2997de;
    }

    to {
      color: #f5f5f5;
    }
  }
`;
export const ContainerMessage = styled.div`
  background-color: transparent;
  border: none;
  border-radius: 10px;
  color: black;
  margin: 8%;
`;
export const TextMessage = styled.p`
  color: red;
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  font-size: 24px;
  background-color: #fff;
  padding: 10% 2px;
  border-radius: 10px;
  animation-name: changeColor;
  animation-direction: alternate;
  animation-duration: 6s;
  animation-iteration-count: infinite;
  @keyframes changeColor {
    0% {
      color: red;
    }
    50% {
      color: blue;
    }
    100% {
      color: black;
    }
  }
`;
