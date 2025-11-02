import { forwardRef } from "react";
import { InputComponentType } from "@/types/types";

import classes from "@/UI/Input.module.scss";

const Input = forwardRef<HTMLInputElement, InputComponentType>(function (
  props,
  ref
) {
  const { unitId, min, ...others} = props;
  return (
    <div>
      <label htmlFor={unitId}>
        <input
          className={classes.input}
          id={unitId}
          {...others}
          ref={ref}
          min={min}
        />
      </label>
    </div>
  );
});

export default Input;
