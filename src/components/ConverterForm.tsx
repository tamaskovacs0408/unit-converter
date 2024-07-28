import UnitResult from "./UnitResult";
import Input from "../UI/Input";
import UnitSelector from "./UnitSelector";
import { useUnitConverter } from "../hooks/useUnitConverter";

import classes from "./ConverterForm.module.scss";

export default function ConverterForm() {
  const {
    enteredUnit,
    unit,
    targetUnit,
    unitType,
    inputUnit,
    handleSubmit,
  } = useUnitConverter();

  return (
    <>
      <form className={classes.form} onSubmit={handleSubmit}>
        <div className={classes["form-header"]}>
          <UnitSelector
            convertTitle='From'
            unitId='from-units'
            unitsArray={unitType}
          />
          <UnitSelector
            convertTitle='To'
            unitId='to-units'
            unitsArray={unitType}
          />
        </div>
        <Input
          unitId='length-unit'
          type='number'
          step={0.01}
          min={0}
          defaultValue={0}
          ref={inputUnit}
        />
        <button className={classes["convert-button"]}>Convert</button>
      </form>
      <UnitResult unit={unit} targetUnit={targetUnit} fromUnit={enteredUnit} />
    </>
  );
}