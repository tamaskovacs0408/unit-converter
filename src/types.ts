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
  unitId: string;
  unitRef?: RefObject<HTMLInputElement>;
}

export type UnitSelectorProps = {
  convertTitle: string;
  unitId: string;
  unitsArray: string[];
}