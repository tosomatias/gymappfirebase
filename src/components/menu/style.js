import styled from "styled-components";

export const StyledMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background: #ece6e6;
  height: 200 vh;
  text-align: left;
  padding: 8px 20px;
  position: absolute;
  top: 8.7%;
  left: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  width: 80%;

  border-bottom-right-radius: 10px;
  z-index: 3;
`;
export const ContainerRoute = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: start;
  margin: 0;
  margin: 1% 0;
  margin-bottom: 40%;
`;
export const RouteInfo = styled.p`
  color: #000000;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-size: 13px;
  margin: 4% 0;
  text-transform: uppercase;
  font-style: italic;
`;
export const ConteinerClose = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

export const Closesesion = styled.p`
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-size: 10px;
  margin: 0;
  color: #2997de;
  padding-right: 1%;
  font-style: italic;
`;

export const ImgProfile = styled.img`
  border-radius: 90px;
  width: 40%;
  position: absolute;
  right: 6%;
  top: 10%;
`;
export const Title = styled.h1`
  color: #000000;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-size: 42px;
  margin: 5% 0;
  font-style: italic;
`;
