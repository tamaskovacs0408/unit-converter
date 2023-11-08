import { useState, useRef } from 'react';
import LengthUnitResult from './LengthUnitResult';
import { lengthUnits } from '../units';

export default function ConverterForm() {
    const [lengthUnit, setLengthUnit] = useState(0);
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

        const enteredInputLengthUnit = Number(inputLengthUnit.current!.value);

        setUnit(selectedUnit);
        setTargetUnit(selectedTargetUnit);
        setLengthUnit(enteredInputLengthUnit);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor='from-units'>
                    Convert from:
                    <select name='from-units' id='from-units'>
                    {lengthUnits.map((unit) => (
                        <option key={unit} value={unit}>
                            {unit}
                        </option>
                    ))}
                    </select>
                </label>
                <p>
                    <label htmlFor='length-unit'>
                        <input
                            type='number'
                            id='length-unit'
                            ref={inputLengthUnit}
                            step={0.1}
                        />
                    </label>
                </p>
                Convert to:
                <select name='to-units' id='to-units'>
                    {lengthUnits.map((unit) => (
                        <option key={unit} value={unit}>
                            {unit}
                        </option>
                    ))}
                </select>
                <button>Convert</button>
            </form>
            <LengthUnitResult
                unit={unit}
                targetUnit={targetUnit}
                lengthUnit={lengthUnit}
            />
        </>
    );
}
