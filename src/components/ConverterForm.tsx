import { useState, useRef, useContext } from 'react';
import UnitResult from './UnitResult';
import { lengthUnits, weightUnits, volumeUnits } from '../units';
import Input from '../UI/Input';
import UnitSelector from './UnitSelector';
import { SelectedUnitContext } from '../store/selectedUnitContext';

export default function ConverterForm() {
  const [enteredUnit, setEnteredUnit] = useState(0);
  const [unit, setUnit] = useState<string>('');
  const [targetUnit, setTargetUnit] = useState('');

  const inputUnit = useRef<HTMLInputElement>(null);

  const { selectedUnitState } = useContext(SelectedUnitContext);

  let unitType;

  if (selectedUnitState === 'length') {
    unitType = lengthUnits;
  }

  if (selectedUnitState === 'weight') {
    unitType = weightUnits;
  }

  if (selectedUnitState === 'volume') {
    unitType = volumeUnits;
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const fd = new FormData(event.currentTarget);
    const fromUnits = fd.getAll('from-units');
    const toUnits = fd.getAll('to-units');
    const data: {
      [key: string]: FormDataEntryValue | FormDataEntryValue[];
    } = Object.fromEntries(fd.entries());
    data.fromUnitData = fromUnits;
    data.toUnitData = toUnits;
    const selectedUnit = data.fromUnitData[0].toString();
    const selectedTargetUnit = data.toUnitData[0].toString();

    const enteredInputUnit = Number(inputUnit.current!.value);

    setUnit(selectedUnit);
    setTargetUnit(selectedTargetUnit);
    setEnteredUnit(enteredInputUnit);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <UnitSelector
          convertTitle='From'
          unitId='from-units'
          unitsArray={unitType || []}
        />
        <Input
          unitId='length-unit'
          type='number'
          step={0.01}
          min={0}
          defaultValue={0}
          ref={inputUnit}
        />
        <UnitSelector
          convertTitle='To'
          unitId='to-units'
          unitsArray={unitType || []}
        />
        <button>Convert</button>
      </form>
      <UnitResult
        unit={unit}
        targetUnit={targetUnit}
        fromUnit={enteredUnit}
      />
    </>
  );
}
