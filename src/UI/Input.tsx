import { InputComponentType } from "../types";

export default function Input(props: InputComponentType) {
  const { inputLengthUnit, lengthUnitId } = props;
    return (
        <>
            <input
                type='number'
                id={lengthUnitId}
                ref={inputLengthUnit}
                step={0.01}
                min={0}
                defaultValue={0}
            />
        </>
    );
}
