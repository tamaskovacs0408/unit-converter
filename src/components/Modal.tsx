import { useContext } from "react";
import { ModalPorps } from "../types";
import classes from "./Modal.module.scss";
import {SelectedUnitContext} from '../store/selectedUnitContext';
import {convertableLengthUnits, convertableWeightUnits, convertableVolumeUnits, lengthUnits, weightUnits, volumeUnits} from '../units';

export default function Modal(props: ModalPorps) {
  const { showModal, toggleModal } = props;

  const { selectedUnitState } = useContext(SelectedUnitContext);

  let convertableUnit;

  switch (selectedUnitState) {
    case 'length':
      convertableUnit = convertableLengthUnits;
      break;
    case 'weight':
      convertableUnit = convertableWeightUnits;
      break;
    case 'volume':
      convertableUnit = convertableVolumeUnits;
      break;
  }





  return (
    showModal && (
      <div className={classes["modal-wrapper"]} onClick={toggleModal}>
        <div className={classes["modal-container"]}>
            <button onClick={toggleModal}>X</button>
            <ul>
              {convertableUnit.map(data => (
                <li key={data.id}>{data.unit} - {data.title}</li>
              ))}
            </ul>
        </div>
      </div>
    )
  );
}
