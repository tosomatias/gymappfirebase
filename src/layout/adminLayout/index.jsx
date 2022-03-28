import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import NavBar from "../../screens/navbar/Navbar";

const AdminLayout = ({ user }) => {
  const token = localStorage.getItem("AUTH_TOKEN");
  if (token) {
    return (
      <>
        <NavBar user={user} />
        <Outlet />
      </>
    );
  } else {
    return <Navigate to="/" />;
  }
};

export default AdminLayout;
