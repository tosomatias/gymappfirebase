import React, { useState } from "react";

import Icon from "./check";

import {
  Containerform,
  ContainerInputDay,
  SelectDay,
  Button,
  Error,
  ContainerButton,
} from "./style";

const Form = ({ db, user }) => {
  const [Form, setForm] = useState({
    dayTraining: "",
    typeTraining: "",
    RPE: "",
    duration: "",
    info: "",
  });
  const [error, actualizarError] = useState(false);
  const [enviado, setEnviado] = useState(false);

  const { dayTraining, typeTraining, RPE, duration, info } = Form;

  const actualizarState = (e) => {
    setForm({
      ...Form,
      [e.target.name]: e.target.value,
    });
  };

  const SubmitForm = async (e) => {
    e.preventDefault();
    if (
      dayTraining.trim() === "" ||
      typeTraining.trim() === "" ||
      RPE.trim() === "" ||
      duration.trim() === ""
    ) {
      actualizarError(true);
      return;
    }
    actualizarError(false);
    setEnviado(true);
    const carga = RPE * duration;
    const data = {
      name: user.displayName,
      Fecha: new Date(),
      ...Form,
      Carga: carga,
    };
    console.log(data);

    //console.log(agregar.nombre);
    // try {
    //   await db.collection(user.displayName).add(data);
    // } catch (error) {
    //   console.log(error);
    // }
    // setForm({
    //   dayTraining: "",
    //   typeTraining: "",
    //   RPE: "",
    //   duration: "",
    //   carga: "",
    // });
  };

  return (
    <Containerform>
      <h1>Planilla de esfuerzo</h1>
      {error ? <Error>Todos los campos son obligatorios</Error> : null}
      <form onSubmit={SubmitForm}>
        <ContainerInputDay>
          <p>Dia de entrenamiento</p>
          <SelectDay
            name="dayTraining"
            id="dayTraining"
            value={dayTraining}
            onChange={actualizarState}
          >
            <option value="">Seleccione un dia</option>
            <option value="lunes">Lunes</option>
            <option value="martes">Martes</option>
            <option value="miercoles">miércoles</option>
            <option value="jueves">Jueves</option>
            <option value="viernes">Viernes</option>
            <option value="sabado">Sábado</option>
          </SelectDay>
          <p>Tipo de entrenamiento</p>
          <SelectDay
            name="typeTraining"
            id="typeTraining"
            value={typeTraining}
            onChange={actualizarState}
          >
            <option value="">Seleccione un tipo de entrenamiento</option>
            <option value="tecnico">Tecnico</option>
            <option value="tactico">Tactico</option>
            <option value="fuerza">Fuerza</option>
            <option value="pliometria">Pliometria</option>
            <option value="combate">Combate</option>
          </SelectDay>
          <p>Nivel RPE:</p>
          <SelectDay name="RPE" id="RPE" value={RPE} onChange={actualizarState}>
            <option value="">Seleccione el nivel de RPE</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </SelectDay>
          <p>Duración del entrenamiento</p>
          <SelectDay
            name="duration"
            id="duration"
            value={duration}
            onChange={actualizarState}
          >
            <option value="">Seleccione la duración del entrenamiento</option>
            <option value="30">30 minutos</option>
            <option value="60">60 minutos</option>
            <option value="90">90 minutos</option>
            <option value="120">120 minutos</option>
            <option value="150">150 minutos</option>
            <option value="180">180 minutos</option>
          </SelectDay>
          <p>Informacion Adicional</p>
          <textarea
            name="info"
            id="info"
            value={info}
            onChange={actualizarState}
          />
          <ContainerButton>
            {enviado ? (
              <Icon />
            ) : (
              <Button type="submit" Enviado={enviado}>
                Enviar
              </Button>
            )}
          </ContainerButton>
        </ContainerInputDay>
      </form>
    </Containerform>
  );
};

export default Form;
