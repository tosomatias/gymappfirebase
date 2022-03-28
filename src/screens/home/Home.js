import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TrainingDay from "../../components/trainingDay/index";
import { Container, Button, ContainerButton } from "./style";
import { messaging } from "../../firebaseConfig";
import { getToken, onMessage } from "firebase/messaging";

const Home = ({ user }) => {
  useEffect(() => {
    getToken(messaging, {
      vapidKey:
        "BFt0ZsfLvdWvmob3d8-f4zvGQWCYNe-fsH-RejxdP4E1jxWMgYjntUoPlGknawboXV1l5nCbHm7wIQCu5_epOxs",
    })
      .then((currentToken) => {
        if (currentToken) {
        } else {
          // Show permission request UI
          console.log(
            "No registration token available. Request permission to generate one."
          );
          // ...
        }
      })
      .catch((err) => {
        console.log("An error occurred while retrieving token. ", err);
        // ...
      });
    onMessage(messaging, (payload) => {
      console.log("Message received. ", payload);
      // ...
    });
  });

  const navigate = useNavigate();
  const [training, setTraining] = useState(false);
  return (
    <Container>
      <div>
        <Button onClick={() => setTraining(!training)}>Entrenamiento</Button>
        <TrainingDay user={user} training={training} />
      </div>

      <ContainerButton training={training}>
        <div>
          <Button onClick={() => navigate("/form")}>Formulario</Button>
        </div>

        <div>
          <Button onClick={() => navigate("/files")}>
            Videos de ejercicios
          </Button>
        </div>
      </ContainerButton>
    </Container>
  );
};

export default Home;
