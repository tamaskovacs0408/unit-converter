import { ButtonProps } from "@/types/types";
import { Link } from "react-router-dom";

import LengthIcon from "@/UI/LengthIcon";
import WeightIcon from "@/UI/WeightIcon";
import VolumeIcon from "@/UI/VolumeIcon";
import DataIcon from "@/UI/DataIcon";
import TimeIcon from "@/UI/TimeIcon"

import classes from "@/UI/Button.module.scss";

export default function Button(props: ButtonProps) {
  const { id, title } = props;

  return (
    <>
      <Link className={classes.selectorButton} to={`/converter/${id}`}>
        <label htmlFor={id} >
          <span>{title}</span>
          <input
            type='radio'
            id={id}
            name='unit'
            defaultChecked={id === "length"}
          />
          {title === "Length" && <LengthIcon />}
          {title === "Weight" && <WeightIcon />}
          {title === "Volume" && <VolumeIcon />}
          {title === "Data" && <DataIcon />}
          {title === "Time" && <TimeIcon />}

        </label>
      </Link>
    </>
  );
}
