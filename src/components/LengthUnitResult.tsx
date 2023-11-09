import { LengthResultType, UnitFactorsType } from '../types';

export default function LengthUnitResult(props: LengthResultType) {
    const { unit, lengthUnit, targetUnit } = props;

    const unitFactors: UnitFactorsType = {
      mm: 0.001,
      cm: 0.01,
      dm: 0.1,
      m: 1,
      km: 1000,
      in: 0.0254,
      ft: 0.3048,
      yd: 0.9144,
      mi: 1609.34,
    };
    
    function convertLength(value: number, fromUnit: string, toUnit: string) {
      return (value * unitFactors[fromUnit]) / unitFactors[toUnit];
    }
    

    const result = Number(convertLength(lengthUnit, unit, targetUnit)?.toFixed(2));

    return (
      <>
      <h2>Result:</h2>
        <p>{result} {targetUnit}</p>
      </>
    )
}