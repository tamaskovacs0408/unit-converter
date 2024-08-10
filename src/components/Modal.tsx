import { useContext, useMemo } from "react";
import { ModalPorps } from "@/types/types";
import classes from "@/components/Modal.module.scss";
import { SelectedUnitContext } from "@/store/selectedUnitContext";
import {
  convertableLengthUnits,
  convertableWeightUnits,
  convertableVolumeUnits,
} from "@/utils/units";

export default function Modal(props: ModalPorps) {
  const { showModal, toggleModal } = props;

  const { selectedUnitState } = useContext(SelectedUnitContext);

  const convertableUnits = useMemo(() => {
    switch (selectedUnitState) {
      case "length":
        return convertableLengthUnits;
      case "weight":
        return convertableWeightUnits;
      case "volume":
        return convertableVolumeUnits;
      default:
        return [];
    }
  }, [selectedUnitState]);

  return (
    showModal && (
      <div className={classes["modal-wrapper"]} onClick={toggleModal}>
        <div className={classes["modal-container"]}>
          <button onClick={toggleModal}></button>
          <ul>
            {convertableUnits.map(data => (
              <li key={data.id}>
                {data.unit} - {data.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  );
}
