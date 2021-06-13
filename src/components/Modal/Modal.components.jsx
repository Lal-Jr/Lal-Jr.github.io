import React from "react";
// import { ModalContainer } from "./Modal.styles.jsx";

const Modal = (showModal, setShowModal) => {
  return <>{showModal ? <div>Modal</div> : null}</>;
};

export default Modal;
