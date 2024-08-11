import { useState, useRef } from "react";
import { lengthUnits, weightUnits, volumeUnits } from "@/utils/units";

export function useUnitConverter(unitType: string | undefined) {
  const [enteredUnit, setEnteredUnit] = useState(0);
  const [unit, setUnit] = useState("");
  const [targetUnit, setTargetUnit] = useState("");

  const inputUnit = useRef<HTMLInputElement>(null);

  const units = (() => {
    switch (unitType) {
      case "length":
        return lengthUnits;
      case "weight":
        return weightUnits;
      case "volume":
        return volumeUnits;
      default:
        return [];
    }
  })();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const fd = new FormData(event.currentTarget);
    const fromUnits = fd.getAll("from-units");
    const toUnits = fd.getAll("to-units");
    const selectedUnit = fromUnits[0].toString();
    const selectedTargetUnit = toUnits[0].toString();

    const enteredInputUnit = Number(inputUnit.current!.value);

    setUnit(selectedUnit);
    setTargetUnit(selectedTargetUnit);
    setEnteredUnit(enteredInputUnit);
  };

  return {
    enteredUnit,
    unit,
    targetUnit,
    unitType: units,
    inputUnit,
    handleSubmit,
  };
}