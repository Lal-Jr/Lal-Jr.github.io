import React from "react";
// import { ModalContainer } from "./Modal.styles.jsx";

function Modal(showModal, setShowModal) {
  return <>{showModal ? <div>Modal</div> : null}</>;
}

export default Modal;
