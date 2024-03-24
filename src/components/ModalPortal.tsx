import { useState } from "react";
import { createPortal } from "react-dom";
import Modal from "./Modal";

export default function ModalPortal() {
  const [showModal, setShowModal] = useState(false);

  function toggleModal() {
    setShowModal(!showModal);
  }

  return (
    <>
      <button onClick={toggleModal}>Convertable units</button>
      {createPortal(
        <Modal showModal={showModal} toggleModal={toggleModal} />,
        document.querySelector("#modal-root") as HTMLElement
      )}
    </>
  );
}
