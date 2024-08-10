import { useState } from "react";
import { createPortal } from "react-dom";
import Modal from "@/components/Modal";

import classes from "@/components/ModalPortal.module.scss"

export default function ModalPortal() {
  const [showModal, setShowModal] = useState(false);

  function toggleModal() {
    setShowModal(!showModal);
  }

  return (
    <>
      <button className={classes["modal-opener"]} onClick={toggleModal}>Convertable units</button>
      {createPortal(
        <Modal showModal={showModal} toggleModal={toggleModal} />,
        document.querySelector("#modal-root") as HTMLElement
      )}
    </>
  );
}
