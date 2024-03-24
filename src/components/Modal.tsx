import { ModalPorps } from "../types";
import classes from "./Modal.module.scss";

export default function Modal(props: ModalPorps) {
  const { showModal, toggleModal } = props;

  return (
    showModal && (
      <div className={classes["modal-wrapper"]} onClick={toggleModal}>
        <div className={classes["modal-container"]}>
            <button onClick={toggleModal}>X</button>
          <h1>Modal</h1>
        </div>
      </div>
    )
  );
}
