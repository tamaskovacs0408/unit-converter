import { UnitConverterFormulaType } from '../types';

export default function unitConverter(
  conversion: UnitConverterFormulaType
): number {
  return (
    (conversion.value * conversion.unitFactor[conversion.from]) /
    conversion.unitFactor[conversion.to]
  );
}