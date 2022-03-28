import styled from "styled-components/macro";

export const Container = styled.div`
  margin: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  padding: 8px 20px;
  z-index: 999;

  background-color: #ece6e6;
`;

export const Icon = styled.i`
  color: ${({ open }) => {
    return open ? "red" : "#3b779c";
  }};

  font-size: 42px;
`;
