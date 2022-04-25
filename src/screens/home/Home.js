import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TrainingDay from "../../components/trainingDay/index";
import { Container, Button, ContainerButton } from "./style";
import { messaging } from "../../firebaseConfig";
import { getToken, onMessage } from "firebase/messaging";

const Home = ({ user }) => {
  // useEffect(() => {
  //   Notification.requestPermission()
  //     .then(function () {
  //       console.log("Got notification permission");
  //       return messaging.getToken();
  //     })
  //     .then(function (token) {
  //       // print the token on the HTML page
  //       console.log("then");
  //     })
  //     .catch(function (err) {
  //       console.log("Didn't get notification permission", err);
  //     });
  //   // getToken(messaging, {
  //   //   vapidKey:
  //   //     "BFt0ZsfLvdWvmob3d8-f4zvGQWCYNe-fsH-RejxdP4E1jxWMgYjntUoPlGknawboXV1l5nCbHm7wIQCu5_epOxs",
  //   // })
  //   //   .then((currentToken) => {
  //   //     if (currentToken) {
  //   //       console.log(currentToken);
  //   //       messaging.messaging.getToken().then((token) => {
  //   //         console.log(token);
  //   //       });
  //   //     } else {
  //   //       // Show permission request UI
  //   //       console.log(
  //   //         "No registration token available. Request permission to generate one."
  //   //       );
  //   //       // ...
  //   //     }
  //   //   })
  //   //   .catch((err) => {
  //   //     console.log("An error occurred while retrieving token. ", err);
  //   //     // ...
  //   //   });
  //   onMessage(messaging, (payload) => {
  //     console.log("Message received. ", payload);
  //     // ...
  //   });
  // });

  const navigate = useNavigate();
  const [training, setTraining] = useState(false);
  const [isReadyForInstall, setIsReadyForInstall] = useState(false);

  useEffect(() => {
    window.addEventListener("beforeinstallprompt", (event) => {
      // Prevent the mini-infobar from appearing on mobile.
      event.preventDefault();
      console.log("👍", "beforeinstallprompt", event);
      // Stash the event so it can be triggered later.
      window.deferredPrompt = event;
      // Remove the 'hidden' class from the install button container.
      setIsReadyForInstall(true);
    });
  }, []);

  async function downloadApp() {
    console.log("👍", "butInstall-clicked");
    const promptEvent = window.deferredPrompt;
    if (!promptEvent) {
      // The deferred prompt isn't available.
      console.log("oops, no prompt event guardado en window");
      return;
    }
    // Show the install prompt.
    promptEvent.prompt();
    // Log the result
    const result = await promptEvent.userChoice;
    console.log("👍", "userChoice", result);
    // Reset the deferred prompt variable, since
    // prompt() can only be called once.
    window.deferredPrompt = null;
    // Hide the install button.
    setIsReadyForInstall(false);
  }

  return (
    <Container>
      {isReadyForInstall && <button onClick={downloadApp}>Descargar</button>}

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
