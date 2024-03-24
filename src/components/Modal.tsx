import { ModalPorps } from "../types";
import classes from "./Modal.module.scss"

export default function Modal(props: ModalPorps) {
    const { showModal, toggleModal } = props;

    return (
        showModal &&
        <div className={classes["modal-wrapper"]}>
            <div className={classes["modal-container"]}>
                <h1>Modal</h1>
            </div>
        </div>
    );
}