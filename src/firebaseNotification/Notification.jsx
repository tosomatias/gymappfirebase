import React, { useState } from "react";
import { requestForToken, onMessageListener } from "./Firebase";
import { Container } from "./style";

const Notification = () => {
  const [notification, setNotification] = useState({ title: "", body: "" });

  requestForToken();

  onMessageListener()
    .then((payload) => {
      setNotification({
        title: payload?.notification?.title,
        body: payload?.notification?.body,
      });
    })
    .catch((err) => console.log("failed: ", err));

  // return <Toaster />;
  return (
    <Container>
      <p>
        <p>{notification?.title}</p>
      </p>
      <p>{notification?.body}</p>
    </Container>
  );
};

export default Notification;
