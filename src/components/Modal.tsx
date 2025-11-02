import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import classes from "@/components/Modal.module.scss";
import {
  convertableLengthUnits,
  convertableWeightUnits,
  convertableVolumeUnits,
  convertableDataUnits,
  convertableTimeUnits
} from "@/utils/units";

interface ModalProps {
  showModal: boolean;
  toggleModal: () => void;
}

export default function Modal({ showModal, toggleModal }: ModalProps) {
  const { unitType } = useParams<{ unitType: string }>();

  const convertableUnits = useMemo(() => {
    switch (unitType) {
      case "length":
        return convertableLengthUnits;
      case "weight":
        return convertableWeightUnits;
      case "volume":
        return convertableVolumeUnits;
      case "data":
        return convertableDataUnits;
      case "time":
        return convertableTimeUnits
      default:
        return [];
    }
  }, [unitType]);

  return (
    showModal && (
      <div className={classes["modal-wrapper"]} onClick={toggleModal}>
        <div className={classes["modal-container"]}>
          <button onClick={toggleModal}></button>
          <ul>
            {convertableUnits.map(data => (
              <li key={data.id}>
                <span>{data.unit}</span>
                <span>{data.title}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  );
}