import { type ComponentPropsWithRef } from "react";

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
} & ComponentPropsWithRef<'input'>;

export type UnitSelectorProps = {
  convertTitle: string;
  unitId: string;
  unitsArray: string[];
}

export type UnitConverterFormulaType = {
  value: number,
  from: string,
  to: string,
  unitFactor: Record<string, number>
}