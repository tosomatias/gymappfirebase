import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const GeneralLayout = () => {
  const token = localStorage.getItem("AUTH_TOKEN");
  if (!token) {
    return (
      <>
        <Outlet />
      </>
    );
  } else {
    return <Navigate to="/home" />;
  }
};

export default GeneralLayout;
