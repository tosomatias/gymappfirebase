import styled from "styled-components/macro";

export const Containerform = styled.div`
  display: flex;
  padding: 0 5%;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  color: #ffffff;
`;
export const ContainerInputDay = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 0 5%;
  margin-bottom: 2%;
`;

export const SelectDay = styled.select`
  text-align: center;
  width: 100%;
  border: none;
  border-radius: 8px;
  background-color: #2997de;
  padding: 8px;
  color: #ffffff;
  :focus {
    outline: none;
  }
  margin-bottom: 5%;
`;

export const Button = styled.button`
  margin-top: 15%;
  border-radius: 8px;
  background-color: transparent;
  border: 1px solid #2997de;
  width: 100%;
  color: #2997de;

  font-size: 16px;
  padding: 8px;
  font-weight: bold;
`;

export const ContainerButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 3% 0;
`;

export const Error = styled.p`
  color: red;
  font-weight: bold;
  font-size: 15px;
  text-align: center;
`;

export const ContainerSvg = styled.svg`
  width: 25%;
  padding-top: 15%;
  animation-duration: 3s;
  animation-name: slidein;

  animation-direction: normal;
  @keyframes slidein {
    0% {
      opacity: 0;
    }

    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
`;
