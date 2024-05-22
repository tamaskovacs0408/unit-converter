import { useContext } from "react";
import Button from "../UI/Button";
import classes from "./Selector.module.scss";
import { SelectedUnitContext } from "../store/selectedUnitContext";

export default function Selector() {
  const buttons = [
    { id: "length", title: "Length" },
    { id: "weight", title: "Weight" },
    { id: "volume", title: "Volume" },
  ];

  const { handleUnitSelect } = useContext(SelectedUnitContext);

  return (
    <div className={classes["selector-wrapper"]}>
      <header>
      {buttons.map(button => (
            <Button
              key={button.id}
              id={button.id}
              title={button.title}
              handleUnitSelect={handleUnitSelect}
            />
          ))}
      </header>
    </div>
  );
}
