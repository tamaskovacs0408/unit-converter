import { ButtonProps } from "@/types/types";
import { Link } from "react-router-dom";

import LengthIcon from "@/UI/LengthIcon";
import WeightIcon from "@/UI/WeightIcon";
import VolumeIcon from "@/UI/VolumeIcon";

import classes from "@/UI/Button.module.scss";

export default function Button(props: ButtonProps) {
  const { id, title, handleUnitSelect } = props;

  return (
    <>
      <Link to={`/converter/${id}`}>
        <label htmlFor={id} className={classes.selectorButton}>
          <span>{title}</span>
          <input
            type='radio'
            id={id}
            name='unit'
            defaultChecked={id === "length"}
            onClick={() => handleUnitSelect(id)}
          />
          {title === "Length" && <LengthIcon />}
          {title === "Weight" && <WeightIcon />}
          {title === "Volume" && <VolumeIcon />}
        </label>
      </Link>
    </>
  );
}
