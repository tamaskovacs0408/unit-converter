import { RefObject } from "react";

export type LengthResultType = {
  unit: string;
  targetUnit: string;
  lengthUnit: number;
}

export type UnitFactorsType = {
  [key: string]: number;
}

export type InputComponentType = {
  lengthUnitId: string;
  inputLengthUnit?: RefObject<HTMLInputElement>;
}