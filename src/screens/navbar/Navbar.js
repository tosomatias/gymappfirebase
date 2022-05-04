import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Icon } from "./style";
import Notification from "../../firebaseNotification/Notification";

import Menu from "../../components/menu/index";

const Navbar = ({ setSecurity, user }) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  return (
    <Container>
      <div>
        <Icon
          className="fas fa-user-graduate"
          onClick={() => setOpen(!open)}
          open={open}
        />
      </div>
      <div>
        <Icon className="fas fa-home" onClick={() => navigate("/home")} />
      </div>
      <div>
        <Icon className="fas fa-bell" />
      </div>
      <div>
        <Notification />
      </div>
      <Menu
        open={open}
        setOpen={setOpen}
        setSecurity={setSecurity}
        user={user}
      />
    </Container>
  );
};

export default Navbar;
