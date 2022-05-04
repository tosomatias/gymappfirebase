import React, { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebaseNotification/Firebase";
import {
  ContainerText,
  ContainerTraining,
  Text,
  Title,
  TextLink,
} from "./style";

const Files = ({ user }) => {
  const [films, setFiles] = useState([]);
  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        const docRef = doc(db, user.displayName, "Films");
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setFiles(docSnap.data());
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
  return (
    <ContainerText>
      <Title>Videos</Title>
      <ContainerTraining>
        <Text>{films.films1}</Text>
        <TextLink href={films.films2} target="_blank" rel="noreferrer">
          {films.films2 ? "Ver video" : null}
        </TextLink>
      </ContainerTraining>
      <ContainerTraining>
        <Text>{films.films3}</Text>
        <TextLink href={films.films4} target="_blank" rel="noreferrer">
          {films.films4 ? "Ver video" : null}
        </TextLink>
      </ContainerTraining>
      <ContainerTraining>
        <Text>{films.films5}</Text>
        <TextLink href={films.films6} target="_blank" rel="noreferrer">
          {films.films6 ? "Ver video" : null}
        </TextLink>
      </ContainerTraining>
      <ContainerTraining>
        <Text>{films.films7}</Text>
        <TextLink href={films.films8} target="_blank" rel="noreferrer">
          {films.films8 ? "Ver video" : null}
        </TextLink>
      </ContainerTraining>
      <ContainerTraining>
        <Text>{films.films9}</Text>
        <TextLink href={films.films10} target="_blank" rel="noreferrer">
          {films.films10 ? "Ver video" : null}
        </TextLink>
      </ContainerTraining>
      <ContainerTraining>
        <Text>{films.films11}</Text>
        <TextLink href={films.films12} target="_blank" rel="noreferrer">
          {films.films12 ? "Ver video" : null}
        </TextLink>
      </ContainerTraining>
      <ContainerTraining>
        <Text>{films.films13}</Text>
        <TextLink href={films.films14} target="_blank" rel="noreferrer">
          {films.films14 ? "Ver video" : null}
        </TextLink>
      </ContainerTraining>
      <ContainerTraining>
        <Text>{films.films15}</Text>
        <TextLink href={films.films16} target="_blank" rel="noreferrer">
          {films.films16 ? "Ver video" : null}
        </TextLink>
      </ContainerTraining>
      <ContainerTraining>
        <Text>{films.films17}</Text>
        <TextLink href={films.films18} target="_blank" rel="noreferrer">
          {films.films18 ? "Ver video" : null}
        </TextLink>
      </ContainerTraining>
    </ContainerText>
  );
};

export default Files;
