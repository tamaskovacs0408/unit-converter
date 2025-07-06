import { useParams } from 'react-router-dom';
import UnitResult from "@/components/UnitResult";
import Input from "@/UI/Input";
import UnitSelector from "@/components/UnitSelector";
import { useUnitConverter } from "@/hooks/useUnitConverter";

import classes from "@/components/ConverterForm.module.scss";
import ConvertButton from '@/UI/ConvertButton';

export default function ConverterForm() {
  const { unitType } = useParams<{ unitType: string }>();
  const {
    enteredUnit,
    unit,
    targetUnit,
    unitType: units,
    inputUnit,
    handleSubmit,
  } = useUnitConverter(unitType);

  if (!units.length) {
    return <div>Invalid unit type selected</div>;
  }

  return (
    <>
      <form className={classes.form} onSubmit={handleSubmit}>
        <div className={classes["form-header"]}>
          <UnitSelector
            convertTitle='From'
            unitId='from-units'
            unitsArray={units}
          />
          <UnitSelector
            convertTitle='To'
            unitId='to-units'
            unitsArray={units}
          />
        </div>
        <Input
          unitId='length-unit'
          type='number'
          step={0.01}
          min={0}
          ref={inputUnit}
          placeholder='0'
        />
        <ConvertButton />
      </form>
      <UnitResult unit={unit} targetUnit={targetUnit} fromUnit={enteredUnit} />
    </>
  );
}