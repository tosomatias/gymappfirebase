import React, { useState, useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth, db } from "../../firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import Avatar from "./avatar.png";

import {
  StyledMenu,
  ContainerRoute,
  RouteInfo,
  ImgProfile,
  Closesesion,
  ConteinerClose,
  Title,
} from "./style";

const Menu = ({ open, setOpen, user }) => {
  const [data, setData] = useState([]);

  const SingOut = () => {
    setOpen(false);
    localStorage.removeItem("AUTH_TOKEN");
    localStorage.clear();
    setTimeout(() => {
      signOut(auth).then(() => {
        window.location.reload(false);
      });
    }, 1000);
  };

  useEffect(() => {
    const obtenerDatos = async () => {
      //const db = firebase.firestore();
      try {
        const docRef = doc(db, user.displayName, "perfil");
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setData(docSnap.data());
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      } catch (error) {
        console.log(error);
      }
    };
    obtenerDatos();
    return () => {
      obtenerDatos();
    };
  }, [user]);
  console.log(data);
  return (
    <StyledMenu open={open}>
      <Title>PERFIL</Title>
      <ContainerRoute>
        {!user.photoURL ? (
          <ImgProfile alt="foto" src={Avatar} />
        ) : (
          <ImgProfile alt="foto" src={user.photoURL} />
        )}

        <RouteInfo>{data.Name}</RouteInfo>
        <RouteInfo>Edad: {data.edad}</RouteInfo>
        <RouteInfo>Peso: {data.peso}</RouteInfo>
        <RouteInfo>Altura: {data.altura}</RouteInfo>
        <RouteInfo>I.M.C: {data.imc}</RouteInfo>
        <RouteInfo>Tipo de entrenamiento: {data.entrenamiento}</RouteInfo>
        <RouteInfo>Periodo: {data.mes}</RouteInfo>
      </ContainerRoute>
      <ConteinerClose>
        <Closesesion onClick={SingOut}>Cerrar Sesion </Closesesion>
        <i className="fas fa-sign-out-alt" />
      </ConteinerClose>
    </StyledMenu>
  );
};
export default Menu;
