import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./screens/login/Login";
import Home from "./screens/home/Home";

import Formulario from "./screens/form/index";
import { auth } from "./firebaseNotification/Firebase";
import { onAuthStateChanged } from "firebase/auth";

import Files from "./screens/Files/Files";
import GeneralLayout from "./layout/generalLayout/GeneralLayout";
import Layout from "./layout/adminLayout/index";

//import useMediaQuery from "@material-ui/core/useMediaQuery";

function App() {
  const [user, setUser] = useState([]);

  //const desktopScreen = useMediaQuery("(min-width: 992px)");

  useEffect(() => {
    const obtenerDatos = async () => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user);
          localStorage.setItem("AUTH_TOKEN", user.uid);
        } else {
          setUser(null);
        }
      });
    };
    obtenerDatos();
    return () => {
      obtenerDatos();
    };
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<GeneralLayout />}>
            <Route path="/" element={<Login />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
          <Route path="" element={<Layout user={user} />}>
            <Route path="/home" element={<Home user={user} />} />
            <Route path="/form" element={<Formulario />} />
            <Route path="/files" element={<Files user={user} />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
