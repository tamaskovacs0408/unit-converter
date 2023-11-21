import { UnitSelectorProps } from '../types';

export default function UnitSelector(props: UnitSelectorProps) {
    const { convertTitle, unitId, unitsArray } = props;

    return (
        <label htmlFor={unitId}>
            {convertTitle}
            <select name={unitId} id={unitId}>
                {unitsArray.map(unit => (
                    <option key={unit} value={unit}>
                        {unit}
                    </option>
                ))}
            </select>
        </label>
    );
}
