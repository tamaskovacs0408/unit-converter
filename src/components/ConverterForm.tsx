import { useState } from 'react';

export default function ConverterForm() {
    const [lengthUnit, setLengthUnit] = useState(0);
    const [unit, setUnit] = useState<string>('');
    const [targetUnit, setTargetUnit] = useState('');

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

        setUnit(selectedUnit);
        setTargetUnit(selectedTargetUnit);

        const convertableUnit = Number(unit);

        if (convertableUnit && convertableUnit > 0) {
            setLengthUnit(convertableUnit);
        }
        console.log(data);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor='from-units'>
                    Convert from:
                    <select name='from-units' id='from-units'>
                        <option value='mm'>mm</option>
                        <option value='cm'>cm</option>
                        <option value='dm'>dm</option>
                        <option value='m'>m</option>
                        <option value='km'>km</option>
                    </select>
                </label>
                <p>
                    <label htmlFor='length-unit'>
                        <input
                            type='number'
                            id='length-unit'
                            name={unit}
                            step={0.1}
                        />
                    </label>
                </p>
                Convert to:
                <select name='to-units' id='to-units'>
                    <option value='mm'>mm</option>
                    <option value='cm'>cm</option>
                    <option value='dm'>dm</option>
                    <option value='m'>m</option>
                    <option value='km'>km</option>
                </select>
                <button>Convert</button>
            </form>
            
        </>
    );
}
