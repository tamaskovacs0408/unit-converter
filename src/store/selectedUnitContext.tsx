import React, { useState, createContext, PropsWithChildren, useCallback } from 'react';
import { SelectedUnitTypes, SelectedUnitContextType } from '../types';

// const SelectedUnitContext = createContext('');

const SelectedUnitContext = createContext<SelectedUnitContextType>({
  selectedUnitState: 'length',
  handleUnitSelect: () => {},
});

const SelectedUnitProvider = React.memo(({ children }: PropsWithChildren) => {
  const [selectedUnitState, setSelectedUnitState] = useState<SelectedUnitTypes>('length');

  const handleUnitSelect = useCallback((unit: SelectedUnitTypes) => {
    setSelectedUnitState(unit);
  }, []);

  return (
    <SelectedUnitContext.Provider value={{ selectedUnitState, handleUnitSelect }}>
      {children}
    </SelectedUnitContext.Provider>
  );
});

export { SelectedUnitContext, SelectedUnitProvider };
