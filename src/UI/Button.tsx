import { ButtonProps } from "../types";

import LengthIcon from "./LengthIcon";
import WeightIcon from "./WeightIcon";
import VolumeIcon from "./VolumeIcon";

import classes from "./Button.module.scss";

export default function Button(props: ButtonProps) {
  const { id, title, handleUnitSelect } = props;

  return (
    <>
      <label htmlFor={id}>
        {title}
        <input
          type='radio'
          className={classes.selectorButton}
          id={id}
          name='unit'
          defaultChecked={id === "length"}
          onClick={() => handleUnitSelect(id)}
        />
        {title === "Length" && <LengthIcon />}
        {title === "Weight" && <WeightIcon />}
        {title === "Volume" && <VolumeIcon />}
      </label>
    </>
  );
}
