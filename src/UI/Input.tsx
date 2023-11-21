import { InputComponentType } from '../types';

export default function Input(props: InputComponentType) {
    const { unitRef, unitId } = props;
    return (
        <div>
            <label htmlFor={unitId}>
            <input
                type='number'
                id={unitId}
                ref={unitRef}
                step={0.01}
                min={0}
                defaultValue={0}
            />
            </label>
        </div>
    );
}
