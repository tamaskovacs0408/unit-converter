import { LengthResultType } from '../types';

import { lengthUnitFactors } from '../unitFactors';
import unitConverter from '../lib/converter';

export default function LengthUnitResult(props: LengthResultType) {
  const { unit, lengthUnit, targetUnit } = props;

  const result = Number(
    unitConverter(lengthUnit, unit, targetUnit, lengthUnitFactors)?.toFixed(2)
  );

  return (
    <>
      {result ? (
        <p>
          {result} {targetUnit}
        </p>
      ) : (
        ''
      )}
    </>
  );
}
