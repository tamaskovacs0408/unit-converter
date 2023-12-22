import { useState, createContext, PropsWithChildren } from 'react';
import { SelectedUnitTypes, SelectedUnitContextType } from '../types';

// const SelectedUnitContext = createContext('');

const SelectedUnitContext = createContext<SelectedUnitContextType>({
  selectedUnitState: 'length',
  handleUnitSelect: () => {},
});

function SelectedUnitProvider({ children }: PropsWithChildren) {
  const [selectedUnitState, setSelectedUnitState] =
    useState<SelectedUnitTypes>('length');

  function handleUnitSelect(unit: SelectedUnitTypes) {
    setSelectedUnitState(unit);
  }

  return (
    <SelectedUnitContext.Provider
      value={{ selectedUnitState, handleUnitSelect }}
    >
      {children}
    </SelectedUnitContext.Provider>
  );
}

export { SelectedUnitContext, SelectedUnitProvider };