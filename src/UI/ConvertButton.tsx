import classes from "@/UI/ConvertButton.module.scss";
import { ConvertButtonProps } from "@/types/types";

export default function ConvertButton({ halfWidth }: ConvertButtonProps) {
  return (
    <button
      className={`${classes["convert-button"]} ${
        halfWidth ? classes["half-width"] : ""
      }`}
    >
      Convert
    </button>
  );
}
