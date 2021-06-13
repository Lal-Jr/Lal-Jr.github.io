import React, { useState } from "react";
import Modal from "../Modal/Modal.components.jsx";
import {
  CardContainer,
  ImageContainer,
  CardContent,
  CardTitle,
  Button,
} from "./Card.styles.jsx";

const Card = ({ title, img }) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <>
      <CardContainer>
        <ImageContainer>
          <img src={img} alt="img" />
        </ImageContainer>
        <CardContent>
          <CardTitle> {title} </CardTitle>
          <Button onClick={openModal}>View More</Button>
        </CardContent>
        <Modal showModal={showModal} setShowModal={setShowModal} />
      </CardContainer>
    </>
  );
};

export default Card;
