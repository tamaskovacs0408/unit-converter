import type { RefObject } from "react";
import { InputComponentType } from "@/types/types";

import classes from "@/UI/Input.module.scss";

type InputProps = InputComponentType & { inputRef?: RefObject<HTMLInputElement | null> };

const Input = function (
  props: InputProps
) {
  const { unitId, min, inputRef, ...others} = props;
  return (
    <div>
      <label htmlFor={unitId}>
        <input
          className={classes.input}
          id={unitId}
          {...others}
          ref={inputRef}
          min={min}
          inputMode="numeric"
        />
      </label>
    </div>
  );
};

export default Input;
