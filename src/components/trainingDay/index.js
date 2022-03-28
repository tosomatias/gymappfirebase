import React, { useState, useEffect } from "react";
import {
  Container,
  ContainerDay,
  Button,
  ContainerData,
  Exercise,
  IconClose,
} from "./style";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import Spinner from "../spinner/Spinner";

const TrainingDay = ({ user, training }) => {
  const [lunes, setLunes] = useState(false);
  const [martes, setMartes] = useState(false);
  const [miercoles, setMiercoles] = useState(false);
  const [jueves, setJueves] = useState(false);
  const [viernes, setViernes] = useState(false);
  const [sabado, setSabado] = useState(false);
  const [dataTraining, setDataTraining] = useState([]);

  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        if (lunes) {
          const docRef = doc(db, user.displayName, "lunes");
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            setDataTraining(docSnap.data());
          } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
          }
        }
        if (martes) {
          const docRef = doc(db, user.displayName, "martes");
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            setDataTraining(docSnap.data());
          } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
          }
        }
        if (miercoles) {
          const docRef = doc(db, user.displayName, "miercoles");
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            setDataTraining(docSnap.data());
          } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
          }
        }
        if (jueves) {
          const docRef = doc(db, user.displayName, "jueves");
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            setDataTraining(docSnap.data());
          } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
          }
        }
        if (viernes) {
          const docRef = doc(db, user.displayName, "viernes");
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            setDataTraining(docSnap.data());
          } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
          }
        }
        if (sabado) {
          const docRef = doc(db, user.displayName, "sabado");
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            setDataTraining(docSnap.data());
          } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
          }
        }
      } catch (error) {
        console.log(error);
      }
    };
    obtenerDatos();
    return () => {
      obtenerDatos();
    };
  }, [user, lunes, martes, miercoles, jueves, viernes, sabado]);
  const closeModal = () => {
    setLunes(false);
    setMartes(false);
    setMiercoles(false);
    setJueves(false);
    setViernes(false);
    setSabado(false);
  };

  return (
    <Container training={training}>
      <ContainerDay training={training}>
        <Button onClick={() => setLunes(!lunes)}>Lunes</Button>
        <Button onClick={() => setMartes(!martes)}>Martes</Button>
        <Button onClick={() => setMiercoles(!miercoles)}>Miércoles</Button>

        <Button onClick={() => setJueves(!jueves)}>Jueves</Button>
        <Button onClick={() => setViernes(!viernes)}>Viernes</Button>
        <Button onClick={() => setSabado(!sabado)}>Sábado</Button>
      </ContainerDay>

      <ContainerData
        lunes={lunes}
        martes={martes}
        miercoles={miercoles}
        jueves={jueves}
        viernes={viernes}
        sabado={sabado}
      >
        <IconClose className="fas fa-times-circle" onClick={closeModal} />
        {dataTraining ? (
          <>
            {dataTraining.ejercicio1 ? (
              <Exercise>{dataTraining.ejercicio1}</Exercise>
            ) : null}
            {dataTraining.ejercicio2 ? (
              <Exercise>{dataTraining.ejercicio2}</Exercise>
            ) : null}
            {dataTraining.ejercicio3 ? (
              <Exercise>{dataTraining.ejercicio3}</Exercise>
            ) : null}
            {dataTraining.ejercicio4 ? (
              <Exercise>{dataTraining.ejercicio4}</Exercise>
            ) : null}
            {dataTraining.ejercicio5 ? (
              <Exercise>{dataTraining.ejercicio5}</Exercise>
            ) : null}
            {dataTraining.ejercicio6 ? (
              <Exercise>{dataTraining.ejercicio6}</Exercise>
            ) : null}
            {dataTraining.ejercicio7 ? (
              <Exercise>{dataTraining.ejercicio7}</Exercise>
            ) : null}
            {dataTraining.ejercicio8 ? (
              <Exercise>{dataTraining.ejercicio8}</Exercise>
            ) : null}
            {dataTraining.ejercicio9 ? (
              <Exercise>{dataTraining.ejercicio9}</Exercise>
            ) : null}
            {dataTraining.ejercicio10 ? (
              <Exercise>{dataTraining.ejercicio10}</Exercise>
            ) : null}
            {dataTraining.ejercicio11 ? (
              <Exercise>{dataTraining.ejercicio11}</Exercise>
            ) : null}
            {dataTraining.ejercicio12 ? (
              <Exercise>{dataTraining.ejercicio12}</Exercise>
            ) : null}
          </>
        ) : (
          <Spinner />
        )}
      </ContainerData>
    </Container>
  );
};

export default TrainingDay;
