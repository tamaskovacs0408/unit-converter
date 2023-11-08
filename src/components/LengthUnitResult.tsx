import { LengthResultType, UnitFactorsType } from '../types';

export default function LengthUnitResult(props: LengthResultType) {
    const { unit, lengthUnit, targetUnit } = props;

    const unitFactors: UnitFactorsType = {
      mm: 0.001,
      cm: 0.01,
      dm: 0.1,
      m: 1,
      km: 1000,
      inch: 0.0254,
      feet: 0.3048,
      yard: 0.9144,
      mile: 1609.34,
    };
    
    function convertLength(value: number, fromUnit: string, toUnit: string) {
      return (value * unitFactors[fromUnit]) / unitFactors[toUnit];
    }
    

    const result = Number(convertLength(lengthUnit, unit, targetUnit)?.toFixed(4));

    return (
      <>
      <h2>Result:</h2>
        <p>{result} {targetUnit}</p>
      </>
    )
}

/**
  const getConversionFactor = (unit, toMeter = false) => {
  const unitFactors = {
    mm: 0.001,
    cm: 0.01,
    dm: 0.1,
    m: 1,
    km: 1000,
    inch: 0.0254,
    feet: 0.3048,
    yard: 0.9144,
    mile: 1609.34,
  };

  return toMeter ? 1 / unitFactors[unit] : unitFactors[unit];
};

const convertLength = () => {
  const inputValueInMeters = parseFloat(inputValue) / 1000; // Converting to meters
  let result;

  switch (selectedUnit) {
    case 'mm':
      result = inputValueInMeters * 1000;
      break;
    case 'cm':
      result = inputValueInMeters * 100;
      break;
    case 'dm':
      result = inputValueInMeters * 10;
      break;
    case 'm':
      result = inputValueInMeters;
      break;
    case 'km':
      result = inputValueInMeters / 1000;
      break;
    default:
      result = inputValue;
  }

  return result;
};
 */
