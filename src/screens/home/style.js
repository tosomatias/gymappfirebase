import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-top: 20px;
`;
export const ContainerButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  transition: transform 0.5s ease-in-out;
  transform: ${({ training }) =>
    training ? " translateY(150px)" : "translateY(0)"};
`;

export const Button = styled.button`
  margin-top: 5%;
  height: 45px;
  width: 15.5rem;
  border: none;
  background: #ffffff;
  border-radius: 5.59395px;
  color: #a71b38;
  text-decoration: none;
  text-align: center;
  font-family: "Rubik", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  padding: 13px 50px;
  :focus {
    outline: none;
  }
`;
