import React from "react";
import { ContainerError, Textfield } from "./style";

const Error = ({ Text }) => {
  return (
    <ContainerError>
      <Textfield>{Text}</Textfield>
    </ContainerError>
  );
};

export default Error;
