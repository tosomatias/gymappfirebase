import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TrainingDay from "../../components/trainingDay/index";
import { Container, Button, ContainerButton } from "./style";

const Home = ({ user }) => {
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
