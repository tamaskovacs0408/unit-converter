import React, { useState, useRef } from "react";
import {
  lengthUnits,
  weightUnits,
  volumeUnits,
  timeUnits,
  dataUnits,
} from "@/utils/units";

export function useUnitConverter(unitType: string | undefined) {
  const [enteredUnit, setEnteredUnit] = useState(0);
  const [unit, setUnit] = useState("");
  const [targetUnit, setTargetUnit] = useState("");

  // eslint-disable-next-line no-undef
  const inputUnit = useRef<HTMLInputElement>(null);

  const units = (() => {
    switch (unitType) {
      case "length":
        return lengthUnits;
      case "weight":
        return weightUnits;
      case "volume":
        return volumeUnits;
      case "data":
        return dataUnits;
      case "time":
        return timeUnits;
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
