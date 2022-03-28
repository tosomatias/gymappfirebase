import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GoogleLoginButton } from "react-social-login-buttons";
import {
  Container,
  ContainerForm,
  ContainerInput,
  Input,
  Button,
  ContainerGoogle,
  Icon,
} from "./style";
import Error from "../../components/Error";
import { auth, db } from "../../firebaseConfig";
import { doc, setDoc } from "firebase/firestore";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

const Login = () => {
  const navigate = useNavigate();
  const [noAccount, setNoAccount] = useState(false);
  const [userNew, setUserNew] = useState(false);
  const [userUser, setUserUser] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [userNon, setUserNon] = useState(false);

  const procesarDatos = (e) => {
    e.preventDefault();
    if (userNew) {
      if (!name.trim() || !email.trim() || !password.trim()) {
        setError(true);
      } else {
        newUser();
        setError(false);
      }
      return;
    }
    if (userUser) {
      if (!email.trim() || !password.trim()) {
        setError(true);
      } else {
        singInUser();
        setError(false);
      }
      return;
    }
  };

  const Google = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        if (user) {
          setUserNon(false);

          navigate("/home");
        }
        setDoc(doc(db, user.displayName, "informacion"), {
          identidad: user.uid,
          Name: user.displayName,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const NoAccount = () => {
    setNoAccount(true);
  };
  const Account = () => {
    setNoAccount(false);
  };

  const newUser = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        if (user) {
          setUserNon(false);

          navigate("/home");
        }
        setDoc(doc(db, name, "informacion"), {
          identidad: user.uid,
          Name: name,
        });
      })
      .catch((error) => {
        console.log(error);
        // ..
      });
  };
  const singInUser = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        if (user) {
          setUserNon(false);

          navigate("/home");
        }
        // ...
      })
      .catch((error) => {
        setUserNon(true);
        console.log(error);
        // ..
      });
  };

  return (
    <Container>
      <h1>SAE</h1>
      <h2>Dirección de Deportes</h2>
      <h3>Cátedra de Musculación</h3>

      <form onSubmit={procesarDatos}>
        <ContainerForm>
          {userNon ? <Error Text="Para ingresar debes registarte" /> : null}
          {noAccount ? (
            <>
              <ContainerInput>
                <Icon className="fas fa-user-astronaut" />
                <Input
                  error={error}
                  type="text"
                  placeholder={error ? "Ingrese su nombre" : "Nombre"}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </ContainerInput>
              <ContainerInput>
                <Icon className="fas fa-at" />
                <Input
                  error={error}
                  type="text"
                  placeholder={error ? "Ingrese su email" : "Email"}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </ContainerInput>

              <ContainerInput>
                <Icon className="fas fa-user-secret" />
                <Input
                  error={error}
                  type="password"
                  placeholder={error ? "Ingrese su contraseña" : "Contraseña"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </ContainerInput>
              <Button type="submit" onClick={() => setUserNew(true)}>
                Registrarse
              </Button>

              <p onClick={Account}>Tengo cuenta</p>
            </>
          ) : (
            <>
              <ContainerInput>
                <Icon className="fas fa-at" />
                <Input
                  error={error}
                  type="text"
                  placeholder={error ? "Ingrese su email" : "Email"}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </ContainerInput>
              <ContainerInput>
                <Icon className="fas fa-user-secret" />
                <Input
                  error={error}
                  type="password"
                  placeholder={error ? "Ingrese su contraseña" : "Contraseña"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </ContainerInput>
              <Button type="submit" onClick={() => setUserUser(true)}>
                Iniciar sesión
              </Button>

              <p onClick={NoAccount}>No tengo cuenta</p>
            </>
          )}
        </ContainerForm>
      </form>
      <ContainerGoogle>
        <GoogleLoginButton
          size="50px"
          style={{ borderRadius: "8px" }}
          onClick={Google}
          text="Iniciar sesión con Google"
        />
      </ContainerGoogle>
    </Container>
  );
};

export default Login;
