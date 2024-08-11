import { useParams } from 'react-router-dom';
import { ResultType } from "@/types/types";
import {
  lengthUnitFactors,
  weightUnitFactors,
  volumeUnitFactors,
} from "@/utils/unitFactors";
import { unitConverter, toPowerOf10 } from "@/utils/converter";

import classes from "@/components/UnitResult.module.scss";

export default function UnitResult({ unit, fromUnit, targetUnit }: ResultType) {
  const { unitType } = useParams<{ unitType: string }>();

  let unitFactor: Record<string, number> = {};

  switch (unitType) {
    case "length":
      unitFactor = lengthUnitFactors;
      break;
    case "weight":
      unitFactor = weightUnitFactors;
      break;
    case "volume":
      unitFactor = volumeUnitFactors;
      break;
    default:
      unitFactor = {};
  }

  let result = Number(unitConverter(fromUnit, unit, targetUnit, unitFactor));

  if (result <= 0.0000000001 || result >= 1000000000000000000000n) {
    result = toPowerOf10(result);
  } else {
    result = Number(result?.toFixed(2));
  }

  return (
    <div className={classes.container}>
      {result ? (
        <p className={classes.result}>
          {result} {targetUnit}
        </p>
      ) : (
        ""
      )}
    </div>
  );
}