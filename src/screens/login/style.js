import styled from "styled-components/macro";

export const Container = styled.div`
  margin: 0;
  padding-top: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const ContainerForm = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 25%;
`;
export const ContainerInput = styled.div`
  margin: 10px 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
export const Input = styled.input`
  ::placeholder {
    color: ${({ error }) => (error ? " #F9BA48" : "white")};
  }
  border: 0;
  outline: 0;
  background: transparent;
  border-bottom: 1px solid black;
  padding-left: 5px;
  color: white;
`;
export const Button = styled.button`
  cursor: pointer;
  margin-top: 45px;
  margin-bottom: 25px;
  border-radius: 10px;
  width: 200px;
  border: none;
  color: #fff;
  background: #1789fc;
  font-size: 16px;
  font-weight: bold;
  padding: 7px 0px;
`;

export const ContainerGoogle = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 25%;
`;
export const Icon = styled.i`
  color: white;
  padding-right: 3px;
`;
