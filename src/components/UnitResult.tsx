import { useContext } from 'react';
import { ResultType } from '../types';
import { lengthUnitFactors, weightUnitFactors, volumeUnitFactors } from '../unitFactors';
import unitConverter from '../lib/converter';
import {SelectedUnitContext} from '../store/selectedUnitContext';

export default function UnitResult(props: ResultType) {
  const { unit, fromUnit, targetUnit } = props;

  const { selectedUnitState } = useContext(SelectedUnitContext);

  let unitFactor: Record<string, number> = {};

  if (selectedUnitState === 'length') {
    unitFactor = lengthUnitFactors;
  }

  if (selectedUnitState === 'weight') {
    unitFactor = weightUnitFactors;
  }

  if (selectedUnitState === 'volume') {
    unitFactor = volumeUnitFactors;
  }

  const result = Number(
    unitConverter(fromUnit, unit, targetUnit, unitFactor)?.toFixed(2)
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
