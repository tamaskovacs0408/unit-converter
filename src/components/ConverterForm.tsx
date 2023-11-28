import { useState, useRef } from 'react';
import LengthUnitResult from './LengthUnitResult';
import { lengthUnits } from '../units';
import Input from '../UI/Input';
import UnitSelector from './UnitSelector';

export default function ConverterForm() {
  const [enteredUnit, setEnteredUnit] = useState(0);
  const [unit, setUnit] = useState<string>('');
  const [targetUnit, setTargetUnit] = useState('');

  const inputLengthUnit = useRef<HTMLInputElement>(null);

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

    const enteredInputUnit = Number(inputLengthUnit.current!.value);

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
          unitsArray={lengthUnits}
        />
        <Input
          unitId='length-unit'
          type='number'
          step={0.01}
          min={0}
          defaultValue={0}
          ref={inputLengthUnit}
        />
        <UnitSelector
          convertTitle='To'
          unitId='to-units'
          unitsArray={lengthUnits}
        />
        <button>Convert</button>
      </form>
      <LengthUnitResult
        unit={unit}
        targetUnit={targetUnit}
        lengthUnit={enteredUnit}
      />
    </>
  );
}
