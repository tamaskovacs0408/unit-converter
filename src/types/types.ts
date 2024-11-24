import { type ComponentPropsWithRef } from 'react';

export type ResultType = {
  unit: string;
  targetUnit: string;
  fromUnit: number;
};

export type UnitFactorsType = {
  [key: string]: number;
};

export type InputComponentType = {
  unitId: string;
} & ComponentPropsWithRef<'input'>;

export type UnitOption = {
  name: string;
  value: string;
};

export type UnitSelectorProps = {
  convertTitle: string;
  unitId: string;
  unitsArray: string[] | UnitOption[];
};

export type SelectedUnitTypes = string;

export type ButtonProps = {
  id: string;
  title: string;
}

export type ConvertableUnits = {
  id: number;
  unit: string;
  title: string;
}

export type ModalPorps = {
  showModal: boolean;
  toggleModal: () => void;
}

export type CurrencyData = {
  code: string;
  name: string;
}