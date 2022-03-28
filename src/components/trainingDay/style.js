import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  position: relative;
  overflow: hidden;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  transition: max-height 0.6s, opacity 10s;

  left: 0;
  top: 1rem;
  width: 100%;
`;

export const ContainerDay = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  transition: max-height 0.6s, opacity 0.8s;
  max-height: ${({ training }) => (training ? "450px " : "0")};
`;
export const Button = styled.button`
  cursor: pointer;
  width: 150px;
  margin: 10px 0 10px 0;
  padding: 5px;
  font-size: 15px;
  font-weight: bold;
  font-style: italic;
  border-radius: 8px;
  background-color: transparent;
  border: 1px solid white;
  color: white;
  /* animation-name: moveUp;
  animation-direction: alternate;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-fill-mode: backwards;

  @keyframes moveUp {
    0% {
      border-top: 2px solid white;
    }
    25% {
      border-right: 2px solid white;
    }
    50% {
      border-bottom: 2px solid white;
    }
    100% {
      border-left: 2px solid white;
    } }*/
`;

export const ContainerData = styled.div`
  display: flex;
  flex-direction: column;

  background: #f5f5f5;
  height: auto;
  text-align: left;
  padding: 2rem 0;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ lunes, martes, miercoles, jueves, viernes, sabado }) =>
    lunes || martes || miercoles || jueves || viernes || sabado
      ? "translateY(0)"
      : "translateY(-800%)"};
  width: 100%;

  border-radius: 8px;
`;

export const IconClose = styled.i`
  position: absolute;
  top: 4%;
  right: 3%;
  font-size: 32px;
`;
export const Exercise = styled.li`
  color: black;

  padding-left: 5%;
  text-transform: uppercase;
  margin: 0;
`;
