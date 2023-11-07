import { LengthResultType } from '../types';

export default function LengthUnitResult(props: LengthResultType) {
    const { unit, lengthUnit, targetUnit } = props;

    return (
      <>
      <h2>Converted result:</h2>
        <p>{unit}</p>
        <p>{lengthUnit}</p>
        <p>{targetUnit}</p>
      </>
    )
}
