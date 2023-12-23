import { ResultType } from '../types';

import { lengthUnitFactors, weightUnitFactors, volumeUnitFactors } from '../unitFactors';
import unitConverter from '../lib/converter';

export default function UnitResult(props: ResultType) {
  const { unit, fromUnit, targetUnit } = props;

  const result = Number(
    unitConverter(fromUnit, unit, targetUnit, lengthUnitFactors)?.toFixed(2)
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
