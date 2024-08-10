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

export type UnitSelectorProps = {
  convertTitle: string;
  unitId: string;
  unitsArray: string[];
};

export type SelectedUnitTypes = string;

export type ButtonProps = {
  id: string;
  title: string;
  handleUnitSelect: (unit: SelectedUnitTypes) => void;
}

export type SelectedUnitContextType = {
  selectedUnitState: SelectedUnitTypes;
  handleUnitSelect: (unit: SelectedUnitTypes) => void;
};

export type ConvertableUnits = {
  id: number;
  unit: string;
  title: string;
}

export type ModalPorps = {
  showModal: boolean;
  toggleModal: () => void;
}